package view

import httpPOST
import kotlinx.coroutines.CoroutineScope
import kotlinx.css.marginBottom
import kotlinx.css.padding
import kotlinx.css.px
import react.*
import ru.butilka.LoginData
import ru.butilka.User
import styled.StyleSheet
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import org.w3c.dom.*
import org.w3c.dom.events.Event
import react.dom.*

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

class ApplicationComponent : RComponent<RProps, LoginPageState>() {

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
        httpPOST("/login",loginData.toString(),::loginResponse)
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


internal var currentUser :User? = null

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

