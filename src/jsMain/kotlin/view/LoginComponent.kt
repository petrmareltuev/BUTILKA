package view

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.*
import model.inputValue
import model.LoginData
import model.User
import rpc.StatusCodeException
import services.LoginService

fun RBuilder.loginComponent(goUser: () -> Unit, scope:CoroutineScope) = child(LoginComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface LoginProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface LoginPageState : RState{
    var username:String
    var password:String
    var errorMessage:String
}

class LoginComponent : RComponent<LoginProps, LoginPageState>() {

    override fun LoginPageState.init(){
        username = ""
        password = ""
        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div("") {
            div {
                h1 { +"Login" }
            }

            div {
                p {
                    input(type = InputType.text, name = "login") {
                        attrs {
                            placeholder = "Имя пользователя"
                            onChangeFunction = {
                                state.username = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
            }

            div {
                p {
                    input(type = InputType.password, name = "password") {
                        attrs {
                            placeholder = "Пароль"
                            onChangeFunction = {
                                state.password = it.inputValue
                                setState{
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
            }

            div{
                p {
                    button(classes = "App-buttons") {
                        span {
                            +"ВХОД"
                        }
                        attrs {
                            onClickFunction = {
                                it.preventDefault()
                                doLogin()
                            }
                        }
                    }
                }
            }

            div {
                h1{
                    +state.errorMessage
                }
            }
        }
    }

    private fun doLogin() {
        val loginService = LoginService(coroutineContext)
        val loginData = LoginData(state.username, state.password)
        props.coroutineScope.launch {
            try {
                val user = loginService.login(loginData)
                setState {
                    errorMessage = user.toString()
                }
            } catch (e: StatusCodeException) {
                setState {
                    errorMessage = "Пошел нахуй"
                }
            }
        }
    }

}


internal var currentUser : User? = null

internal fun logInUser(user:User){
    currentUser = user
}

internal fun logOutUser(){
    currentUser = null
}