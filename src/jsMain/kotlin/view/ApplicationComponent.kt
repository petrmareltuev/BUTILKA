package view

import kotlinx.coroutines.CoroutineScope
import model.renderAppBar
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
            renderAppBar()
            div("App-header") {
                h2("App-font") { +"BUTILKA" }
            }
            div {
                when (state.selected) {
                    Views.Loading -> h1 { +"Loading..." }
                    Views.Home -> homeComponent(::goLogin, ::goRegister)
                    Views.Login -> loginComponent(::goHome, ::goUser, props.coroutineScope)
                    Views.Register -> registerComponent(::goHome, ::goUser, props.coroutineScope)
                    Views.User -> userComponent(::goInputCaseInfo, ::goHome, ::goStats, ::goRequest, ::goMyNotifications, ::goAddLoh, ::goAddDrugs, ::goChangeLohInfo)
                    Views.InputCaseInfo -> inputCaseInfoComponent(::goHome, ::goUser,  props.coroutineScope)
                    Views.NotFound -> notFoundComponent()
                    Views.Request -> requestComponent(::goUser, props.coroutineScope)
                    Views.MyNotifications -> myNotificationComponent(::goUser, props.coroutineScope)
                    Views.Stats -> statsComponent(::goUser, props.coroutineScope)
                    Views.AddLoh -> addLohComponent(::goUser, props.coroutineScope)
                    Views.AddDrugs -> addDrugsComponent(::goUser, props.coroutineScope)
                    Views.ChangeLohInfo -> changeLohInfoComponent(::goUser, props.coroutineScope)
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
    fun goRequest() {
        setState {
            selected = Views.Request
        }
    }
    fun goMyNotifications() {
        setState {
            selected = Views.MyNotifications
        }
    }

    fun goStats(){
        setState{
            selected = Views.Stats
        }
    }

    private fun goAddLoh() {
        setState {
            selected = Views.AddLoh
        }
    }

    private fun goAddDrugs() {
        setState {
            selected = Views.AddDrugs
        }
    }

    private fun goChangeLohInfo() {
        setState {
            selected = Views.ChangeLohInfo
        }
    }
}