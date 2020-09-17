package view

import kotlinx.coroutines.CoroutineScope
import react.*
import react.dom.div
import react.dom.h1
import react.dom.h2


interface ApplicationPageState : RState{
    var selected: Views
}

interface ApplicationProps: RProps {
    var coroutineScope: CoroutineScope
}

class ApplicationComponent : RComponent<ApplicationProps, ApplicationPageState>() {

    override fun ApplicationPageState.init() {
        selected = Views.Home
    }

    override fun RBuilder.render() {
        div {
            div("App-header") {
                h2("App-font") {
                    +"BUTILKA"
                }
            }
            div {
                when (state.selected) {
                    Views.Loading -> h1 { +"Loading..." }
                    Views.Home -> homeComponent(::goLogin, ::goRegister)
                    Views.Login -> loginComponent(::goUser)
                    Views.Register -> registerComponent(::goHome, ::goUser)
                    Views.User -> userComponent(::goInputCaseInfo, ::goHome)
                    Views.InputCaseInfo -> inputCaseInfoComponent(::goHome)
                    Views.NotFound -> notFoundComponent()
                }
            }
        }
    }

    private fun goUser() {
        setState {
            selected = Views.User
        }
    }

    private fun goHome() {
        setState {
            selected = Views.Home
        }
    }

    private fun goInputCaseInfo() {
        setState {
            selected = Views.InputCaseInfo
        }
    }

    private fun goLogin() {
        setState {
            selected = Views.Login
        }
    }

    private fun goRegister() {
        setState {
            selected = Views.Register
        }
    }

    fun goInputCaseInput() {
        setState {
            selected = Views.InputCaseInfo
        }
    }
}