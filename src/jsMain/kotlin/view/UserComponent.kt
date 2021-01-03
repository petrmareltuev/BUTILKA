package view

import kotlinx.html.js.onClickFunction
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.*

fun RBuilder.userComponent(goInputCaseInfo: () -> Unit, goHome: () -> Unit, goStats: () -> Unit, goRequest: () -> Unit, goMyNotifications: () -> Unit) = child(UserComponent::class) {
    attrs.goInputCaseInfo = goInputCaseInfo
    attrs.goHome = goHome
    attrs.goRequest = goRequest
    attrs.goMyNotifications = goMyNotifications
    attrs.goStats = goStats
}

external interface UserProps: RProps {
    var goInputCaseInfo: () -> Unit
    var goHome: () -> Unit
    var goRequest: () -> Unit
    var goStats: () -> Unit
    var goMyNotifications: () -> Unit
}

class UserComponent : RComponent<UserProps, RState>() {
    override fun RBuilder.render() {
        div {
            div(classes = "user") {
                h1(classes = "pageTitle") { +"Добро пожаловать " }
                h1(classes = "pageTitle") { +currentUser?.full_name!! }
                if (currentUser?.isMajor!!){
                    p {
                        button(classes = "App-buttons") {
                            span {
                                +"Подать заявку"
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
                                +"Cтатистика"
                            }
                            attrs {
                                onClickFunction = {
                                    props.goStats()
                                }
                            }

                        }
                    }
                }
                else{
                    p {
                        button(classes = "App-buttons") {
                            span {
                                +"Мои уведомления"
                            }
                            attrs {
                                onClickFunction = {
                                    props.goMyNotifications()
                                }
                            }

                        }
                    }
                    p {
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