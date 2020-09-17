package view


import model.inputValue
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import model.CaseInfo
import react.*
import react.dom.*

fun RBuilder.inputCaseInfoComponent(goHome:() -> Unit) = child(InputCaseInfoComponent::class){
    attrs.goHome = goHome
}

external interface InputCaseInfoProps: RProps {
    var goHome: () -> Unit
}

interface InputCaseInfoPageState : RState {
    var participant:String
    var victim:String
    var witness:String
    var comment:String
}

class InputCaseInfoComponent: RComponent<InputCaseInfoProps, InputCaseInfoPageState>()
{
    override fun InputCaseInfoPageState.init() {
        participant = ""
        victim = ""
        witness = ""
        comment = ""
    }

    override fun RBuilder.render() {

        div {
            form {
                legend { +"Внесение информации о задержании" }
                p {
                    input(type = InputType.text, name = "Сотрудники") {
                        attrs {
                            placeholder = "Учавствующие в задержании"
                            onChangeFunction = {
                                state.participant = it.inputValue
                                setState{}
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "ЛОХ") {
                        attrs {
                            placeholder = "ЛОХ"
                            onChangeFunction = {
                                state.victim = it.inputValue
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
            }
        }
    }

    private fun sendReport(){
        val report = CaseInfo(currentUser?.username!!, currentUser?.password!!, state.participant, state.victim, state.witness, state.comment)
        //httpPOST("/report",report.toString(),::reportSended)
        //props.goHome()
    }
    private fun reportSended(response: String){

    }
}