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
            h1 (classes= "pageTitle"){ +"Регистрация" }
        }
        div (classes="reg-box"){
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
                    input(type = InputType.text, name = "Наименование организации") {
                        attrs {
                            placeholder = "Наименование организации"
                            onChangeFunction = {
                                state.organization = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Номер удостоверения") {
                        attrs {
                            placeholder = "Номер удостоверения"
                            onChangeFunction = {
                                state.certificateId = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Личный номер") {
                        attrs {
                            placeholder = "Личный номер"
                            onChangeFunction = {
                                state.personalId = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Должность") {
                        attrs {
                            placeholder = "Должность"
                            onChangeFunction = {
                                state.duty = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
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
            }
            div(classes = "reg-input-box"){
                p{
                    input(type = InputType.text, name = "Логин") {
                        attrs {
                            placeholder = "Логин"
                            onChangeFunction = {
                                state.username = it.inputValue
                                setState {
                                    errorMessage = ""
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
                                    errorMessage = ""
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
                                    errorMessage = ""
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
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Регистрация"
                        }
                        attrs {
                            onClickFunction = {
                                it.preventDefault()
                                doRegister()
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
                                props.goHome()
                            }
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

    private fun doRegister() {
        val user = User(state.username, state.password, state.fullName, state.organization, state.certificateId, state.personalId, state.issued, state.duty, state.phone, state.email)

        val validateUser = Validation<User> {

            User::username {
                minLength(8) hint "Логин должен состоять как минимум из 8 символов"
                maxLength(50) hint "Логин не должен превышать 70 символов"
            }

            User::password {
                minLength(8) hint "Пароль должен состоять как минимум из 8 символов"
                maxLength(50) hint "Пароль не должен превышать 70 символов"
            }
            User::full_name {
                minLength(1) hint "Поле \"ФИО\" является обязательным для заполнения"
            }
            User::organization {
                minLength(1) hint "Поле \"Наименование организации\" является обязательным для заполнения"
            }
            User::certificate_id {
                minLength(1) hint "Поле \"Номер удостоверения\" является обязательным для заполнения"
            }
            User::personal_id {
                minLength(1) hint "Поле \"Личный номер\" является обязательным для заполнения"
            }
            User::issued {
                minLength(1) hint "Поле \"Выдано\" является обязательным для заполнения"
            }
            User::duty {
                minLength(1) hint "Поле \"Должность\" является обязательным для заполнения"
            }
            User::email required  {
                pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}") hint "Вы ввели неправильный e-mail"
            }

            User::phone required  {
                pattern("\\+79[0-9]{9}") hint "Телефон должен быть в формате +79xxxxxxxxx"
            }
        }
        val validationResult = validateUser(user)
        console.log(Valid(user)==validationResult)
        console.log(validationResult)


        if(Valid(user)==validationResult){
            val registerService = RegisterService(coroutineContext)
            props.coroutineScope.launch {
                val response = registerService.register(user)
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
        else
        {
            setState{
                errorMessage=validationResult.errors.first().message
            }
        }
    }
}
