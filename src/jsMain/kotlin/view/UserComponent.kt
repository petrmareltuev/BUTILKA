package view

import kotlinx.html.js.onClickFunction
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.*

fun RBuilder.userComponent(goInputCaseInfo: () -> Unit, goHome: () -> Unit, goRequest: () -> Unit) = child(UserComponent::class) {
    attrs.goInputCaseInfo = goInputCaseInfo
    attrs.goHome = goHome
    attrs.goRequest = goRequest
}

external interface UserProps: RProps {
    var goInputCaseInfo: () -> Unit
    var goHome: () -> Unit
    var goRequest: () -> Unit
}

class UserComponent : RComponent<UserProps, RState>() {
    override fun RBuilder.render() {
        div {
            div(classes = "user") {
                h1(classes= "pageTitle") { +"Добро пожаловать " }
                h1(classes= "pageTitle") { +currentUser?.full_name!! }
                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Заявка на повышениие звания"
                        }
                        attrs {
                            onClickFunction = {
                                props.goRequest()
                            }
                        }

                    }
                }
                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Внесение информации о задержании"
                        }
                        attrs {
                            onClickFunction = {
                                props.goInputCaseInfo()
                            }
                        }

                    }
                }

                p{
                    button(classes = "App-buttons") {
                        span {
                            +"Выход"
                        }
                        attrs {
                            onClickFunction = {
                                it.preventDefault()
                                logOutUser()
                                props.goHome()
                            }
                        }
                    }
                }
            }
        }
    }
}