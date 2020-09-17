package view

import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.*
import model.inputValue
import model.LoginData
import model.User

fun RBuilder.loginComponent(goUser: () -> Unit) = child(LoginComponent::class) {
    attrs.goUser = goUser
}

external interface LoginProps: RProps {
    var goUser: () -> Unit
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
        val loginData = LoginData(state.username, state.password)
        //httpPOST("/login",loginData.toString(),::loginResponse)
    }

    private fun loginResponse(response: String){
        if (response == "Wrong username or password") {
            setState {
                errorMessage = response
            }
        }
        else{
            setState {
                errorMessage = "good"
                val user = JSON.parse<User>(response)
                logInUser(user)
                props.goUser()
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