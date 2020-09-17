package view

import components.renderAppBar
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.css.marginBottom
import kotlinx.css.padding
import kotlinx.css.*
import react.*
import model.LoginData
import model.User
import styled.StyleSheet
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import org.w3c.dom.*
import org.w3c.dom.events.Event
import react.dom.*
import rpc.StatusCodeException
import services.LoginService

internal val Event.inputValue: String
    get() = (target as? HTMLInputElement)?.value ?: (target as? HTMLTextAreaElement)?.value ?: ""

private object ApplicationStyles: StyleSheet("ApplicationStyles", isStatic = true) {
    val wrapper by css {
        padding(32.px, 16.px)
    }

    val post by css {
        marginBottom = 32.px
    }
}


interface LoginPageState : RState{
    var username:String
    var password:String
    var errorMessage:String
}

interface LoginProps: RProps {
    var coroutineScope: CoroutineScope
}


class ApplicationComponent : RComponent<LoginProps, LoginPageState>() {

    override fun LoginPageState.init(){
        username = ""
        password = ""
        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext


    override fun RBuilder.render() {
        div("App") {

            renderAppBar()
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
            }
            catch (e: StatusCodeException){
                setState {
                    errorMessage = "Пошел нахуй"
                }
            }

        }
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

            }
        }
    }
}


internal var currentUser : User? = null

internal fun logInUser(user: User){
    currentUser = user
}

internal fun logOutUser(){
    currentUser = null
}

/*
interface ApplicationProps: RProps {
    var coroutineScope: CoroutineScope
}

class ApplicationState: RState

class ApplicationComponent: RComponent<ApplicationProps, ApplicationState>() {
    init {
        state = ApplicationState()
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        styledDiv {
            css {
                +ApplicationStyles.wrapper
            }

            +"Kotlin multiplatform react application demo"
        }
    }
}
*/

