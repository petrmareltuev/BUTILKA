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

fun RBuilder.loginComponent(goHome: () -> Unit, goUser: () -> Unit, scope:CoroutineScope) = child(LoginComponent::class) {
    attrs.goUser = goUser
    attrs.goHome = goHome
    attrs.coroutineScope = scope
}

external interface LoginProps: RProps {
    var goUser: () -> Unit
    var goHome: () -> Unit
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
                h1 (classes= "pageTitle"){ +"Войти" }
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
                    logInUser(user)
                    props.goUser()
                }
            } catch (e: StatusCodeException) {
                setState {
                    errorMessage = "Неверное имя пользователя или пароль"
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