package view


import io.konform.validation.Valid
import io.konform.validation.Validation
import io.konform.validation.jsonschema.minLength
import io.konform.validation.jsonschema.pattern
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import model.Report
import model.inputValue
import react.*
import react.dom.*
import rpc.StatusCodeException
import services.ReportService

fun RBuilder.inputCaseInfoComponent(goHome:() -> Unit, goUser: () -> Unit, scope: CoroutineScope) = child(InputCaseInfoComponent::class){
    attrs.goHome = goHome
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface InputCaseInfoProps: RProps {
    var goHome: () -> Unit
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface InputCaseInfoPageState : RState {
    var caseNumber:String
    var participant:String
    var victim:String
    var witness:String
    var comment:String
    var errorMessage:String
}

class InputCaseInfoComponent: RComponent<InputCaseInfoProps, InputCaseInfoPageState>()
{
    override fun InputCaseInfoPageState.init() {
        caseNumber = ""
        participant = ""
        victim = ""
        witness = ""
        comment = ""
        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {

        div {
            div {
                h1(classes= "pageTitle") { +"Внесение информации о задержании" }
                p {
                    input(type = InputType.text, name = "case_number") {
                        attrs {
                            placeholder = "Номер дела"
                            onChangeFunction = {
                                state.caseNumber = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Сотрудники") {
                        attrs {
                            placeholder = "Учавствующие в задержании"
                            onChangeFunction = {
                                state.participant = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Номер паспорта ЛОХа") {
                        attrs {
                            placeholder = "Номер паспорта ЛОХа"
                            onChangeFunction = {
                                state.victim = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Свидетель") {
                        attrs {
                            placeholder = "Свидетель"
                            onChangeFunction = {
                                state.witness = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Обстоятельства задержания") {
                        attrs {
                            placeholder = "Обстоятельства задержания"
                            onChangeFunction = {
                                state.comment = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    button(classes = "App-buttons") {
                        span {
                            +"Отправить"
                        }
                        attrs {
                            onClickFunction = {
                                it.preventDefault()
                                sendReport()
                            }
                        }
                    }
                }
                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Назад"
                        }
                        attrs {
                            onClickFunction = {
                                it.preventDefault()
                                props.goUser()
                            }
                        }

                    }
                }

                h1{
                    +state.errorMessage
                }
            }
        }
    }

    private fun sendReport() {
        val report = Report(currentUser?.username!!, currentUser?.password!!, state.caseNumber, state.participant, state.victim, state.witness, state.comment)
        val validateReport = Validation<Report> {

            Report::case_number {
                minLength(1) hint "Поле \"Номер дела\" является обязательным для заполнения"
            }

            Report::participants {
                minLength(1) hint "Поле \"Учавствующие в задержании\" является обязательным для заполнения"
            }
            Report::victim required {
                pattern("\\d{10}") hint "Номер паспорта должен состоять ровно из 10 чисел"
            }

        }
        val validationResult = validateReport(report)
        val reportService = ReportService(coroutineContext)
        console.log(Valid(report) ==validationResult)
        console.log(validationResult)

        if(Valid(report) ==validationResult) {
            props.coroutineScope.launch {
                try {
                    val response = reportService.sendReport(report)
                    setState {
                        errorMessage = if (response == "OK") {
                            "Информацио о деле успешно внесена"
                        } else{
                            "Лоха с таким номером паспорта не существует"
                        }
                    }

                } catch (e: StatusCodeException) {
                    setState {
                        errorMessage = "Неверное имя пользователя или пароль"
                    }
                }
            }
        }
        else
        {
            setState{
                errorMessage= validationResult.errors.first().message
            }
        }
    }
}