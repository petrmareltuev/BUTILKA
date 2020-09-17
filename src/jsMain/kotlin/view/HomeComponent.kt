package view

import kotlinx.html.js.onClickFunction
import react.*
import react.dom.button
import react.dom.div
import react.dom.*


fun RBuilder.homeComponent(goLogin: () -> Unit, goRegister: () -> Unit) = child(HomeComponent::class) {
    attrs.goLogin = goLogin
    attrs.goRegister = goRegister
}

external interface HomeProps: RProps {
    var goLogin: () -> Unit
    var goRegister: () -> Unit
}

class HomeComponent : RComponent<HomeProps, ApplicationPageState>() {
    override fun RBuilder.render() {
        div() {
            button(classes = "App-buttons") {
                span() {
                    +"Вход"
                }
                attrs {
                    onClickFunction = {
                        props.goLogin()
                    }
                }
            }
            button(classes = "App-buttons") {
                span {
                    +"Регистрация"
                }
                attrs {
                    onClickFunction = {
                        props.goRegister()
                    }
                }
            }
        }
    }
}