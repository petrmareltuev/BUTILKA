package view


import io.konform.validation.Valid
import io.konform.validation.Validation
import io.konform.validation.jsonschema.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import model.inputValue
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import model.Loh
import model.User
import react.*
import react.dom.*
import services.AddLohService
import services.RegisterService

fun RBuilder.addLohComponent(goUser: () -> Unit, scope: CoroutineScope) = child(AddLohComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface AddLohProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface AddLohPageState: RState{
    var fullName: String
    var passportSerialNumber: String
    var registrationAddress: String
    var issued: String
    var subdivisionCode: String

    var errorMessage: String
}

class AddLohComponent : RComponent<AddLohProps, AddLohPageState>() {

    override fun AddLohPageState.init() {
        fullName= ""
        passportSerialNumber = ""
        registrationAddress = ""
        issued = ""
        subdivisionCode = ""

        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div {
            h1 (classes= "pageTitle"){ +"Добавить лоха" }
        }
            div(classes = "reg-input-box") {
                p {
                    input(type = InputType.text, name = "fio") {
                        attrs {
                            placeholder = "Фамилия Имя Отчество"
                            onChangeFunction = {
                                state.fullName = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Серия и номер паспорта") {
                        attrs {
                            placeholder = "Серия и номер паспорта"
                            onChangeFunction = {
                                state.passportSerialNumber = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Адрес") {
                        attrs {
                            placeholder = "Адрес"
                            onChangeFunction = {
                                state.registrationAddress = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p{
                    input(type = InputType.text, name = "Выдано") {
                        attrs {
                            placeholder = "Выдано"
                            onChangeFunction = {
                                state.issued = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Код подразделения") {
                        attrs {
                            placeholder = "Код подразделения"
                            onChangeFunction = {
                                state.subdivisionCode = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Добавить лоха"
                        }
                        attrs {
                            onClickFunction = {
                                addLoh()
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
                                props.goUser()
                            }
                        }
                    }
                }
            }
        div{
            h1{
                + state.errorMessage
            }
        }
    }

    private fun addLoh() {
        val loh = Loh(state.fullName, state.passportSerialNumber, state.registrationAddress, state.issued, state.subdivisionCode)

        val validateLoh = Validation<Loh> {

            Loh::fullname {
                minLength(8) hint "ФИО должен состоять как минимум из 8 символов"
                maxLength(50) hint "ФИО не должен превышать 50 символов"
            }

            Loh::passportSerialNumber {
                pattern("\\d{10}") hint "Номер паспорта должен состоять ровно из 10 чисел"
            }
            Loh::registrationAddress {
                minLength(1) hint "Поле \"Адрес\" является обязательным для заполнения"
            }
            Loh::issued {
                minLength(1) hint "Поле \"Выдано\" является обязательным для заполнения"
            }
            Loh::subdivisionCode {
                minLength(1) hint "Поле \"Код подразделения\" является обязательным для заполнения"
            }

        }
        val validationResult = validateLoh(loh)


        if(Valid(loh)==validationResult){
            val addLohService = AddLohService(coroutineContext)
            props.coroutineScope.launch {
                val response = addLohService.addLoh(loh)
                if (response == "OK"){
                    setState{
                        errorMessage = "Лох добавлен"
                    }
                }
                else
                if (response == "Exists"){
                    setState{
                        errorMessage = "Лох уже существует"
                    }
                }
            }
        }
        else
        {
            setState{
                errorMessage=validationResult.errors.first().message
            }
        }
    }
}
