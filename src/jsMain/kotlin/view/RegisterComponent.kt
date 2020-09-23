package view

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import model.inputValue
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import model.User
import react.*
import react.dom.*
import services.RegisterService

fun RBuilder.registerComponent(goHome: () -> Unit, goUser: () -> Unit, scope: CoroutineScope) = child(RegisterComponent::class) {
    attrs.goHome = goHome
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface RegisterProps: RProps {
    var goHome: () -> Unit
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface RegisterPageState: RState{
    var fullName: String
    var organization: String
    var certificateId: String
    var personalId: String
    var duty: String
    var issued: String
    var username: String
    var password: String
    var phone: String
    var email: String

    var errorMessage: String
}

class RegisterComponent : RComponent<RegisterProps, RegisterPageState>() {

    override fun RegisterPageState.init() {
        fullName= ""
        organization = ""
        certificateId = ""
        personalId = ""
        duty = ""
        issued = ""
        username = ""
        password = ""
        phone = ""
        email = ""
        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div {
            div {
                h1 { +"Register" }
            }
            p{
                input(type = InputType.text, name = "fio") {
                    attrs {
                        placeholder = "Фамилия Имя Отчество"
                        onChangeFunction = {
                            state.fullName = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.text, name = "Наименование организации") {
                    attrs {
                        placeholder = "Наименование организации"
                        onChangeFunction = {
                            state.organization = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.text, name = "Номер удостоверения") {
                    attrs {
                        placeholder = "Номер удостоверения"
                        onChangeFunction = {
                            state.certificateId = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.text, name = "Личный номер") {
                    attrs {
                        placeholder = "Личный номер"
                        onChangeFunction = {
                            state.personalId = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.text, name = "Должность") {
                    attrs {
                        placeholder = "Должность"
                        onChangeFunction = {
                            state.duty = it.inputValue
                            setState {

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

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.text, name = "Логин") {
                    attrs {
                        placeholder = "Логин"
                        onChangeFunction = {
                            state.username = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.password, name = "Пароль") {
                    attrs {
                        placeholder = "Пароль"
                        onChangeFunction = {
                            state.password = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.tel, name = "Телефон") {
                    attrs {
                        placeholder = "Телефон"
                        onChangeFunction = {
                            state.phone = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                input(type = InputType.email, name = "E-mail") {
                    attrs {
                        placeholder = "E-mail"
                        onChangeFunction = {
                            state.email = it.inputValue
                            setState {

                            }
                        }
                    }
                }
            }
            p{
                button(classes = "App-buttons") {
                    span {
                        +"Зарегистрироваться"
                    }
                    attrs {
                        onClickFunction = {
                            it.preventDefault()
                            doRegister()
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
    }

    private fun doRegister() {
        val user = User(state.username, state.password, state.fullName, state.organization, state.certificateId, state.personalId, state.issued, state.duty, state.phone, state.email)
        console.log(user)
        var registerService = RegisterService(coroutineContext)
        props.coroutineScope.launch {
            var response = registerService.register(user)
            if (response){
                logInUser(user)
                props.goUser()
            }
            else{
                setState{
                    errorMessage = "Пользователь с таким именем уже существует"
                }
            }
        }
    }
}
