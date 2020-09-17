package view

import kotlinx.html.js.onClickFunction
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.*

fun RBuilder.userComponent(goInputCaseInfo: () -> Unit, goHome: () -> Unit) = child(UserComponent::class) {
    attrs.goInputCaseInfo = goInputCaseInfo
    attrs.goHome = goHome
}

external interface UserProps: RProps {
    var goInputCaseInfo: () -> Unit
    var goHome: () -> Unit
}

class UserComponent : RComponent<UserProps, RState>() {
    override fun RBuilder.render() {
        div {
            form() {
                h1 {
                    +"Добро пожаловать "
                }
                h1 {
                    +currentUser?.full_name!!
                }
                p() {
                    button(classes = "App-buttons") {
                        span {
                            +"Просмотр уведомлений о подбросах"
                        }
                    }
                }
                p() {
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
                p() {
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