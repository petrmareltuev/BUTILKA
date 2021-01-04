package view

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.js.onClickFunction
import model.LoginData
import model.Notification
import react.*
import react.dom.*
import rpc.StatusCodeException
import services.NotificationService

enum class IsNotification {
    ThereIsRequest,
    ThereIsNotRequest,
    Loading
}

fun RBuilder.myNotificationComponent(goUser: () -> Unit, scope: CoroutineScope) = child(MyNotificationComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface MyNotificationProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface MyNotificationPageState: RState{
    var selected: IsNotification
    var notification: Notification
}

class MyNotificationComponent : RComponent<MyNotificationProps, MyNotificationPageState>() {

    override fun MyNotificationPageState.init() {
        selected = IsNotification.Loading
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div {

            when (state.selected) {
                IsNotification.Loading -> h1 (classes ="pageTitle"){ +"Загрузка..."
                    checkNotification()
                }
                IsNotification.ThereIsNotRequest -> {
                    p {
                        h1 (classes= "pageTitle"){ +"Здесь пока пусто" }
                    }
                }
                IsNotification.ThereIsRequest ->div{
                    h1 (classes ="pageTitle"){+"Для вас есть дело № ${state.notification.case_number}" }
                    h1 (classes ="pageTitle"){+"Лох: ${state.notification.loh.fullname}" }
                    h1 (classes ="pageTitle"){+"Адрес: ${state.notification.loh.registrationAddress}" }
                    h1 (classes ="pageTitle"){+"Паспорт: ${state.notification.loh.passportSerialNumber}, Выдан ${state.notification.loh.issued}" }
                    h1 (classes ="pageTitle"){+"Код подразделения: ${state.notification.loh.subdivisionCode}" }
                    h1 (classes ="pageTitle"){+"Необходим подброс: ${state.notification.drugName}, ${state.notification.drugMass} грамм" }
                    img {
                        attrs {
                            src = "https://people.kth.se/~hhofer/parade/images/team/person.png"
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
                            props.goUser()
                        }
                    }

                }
            }
        }
    }

    private fun checkNotification() {
        val notificationService = NotificationService(coroutineContext)
        val loginData = LoginData(currentUser?.username!!, currentUser?.password!!)
        props.coroutineScope.launch {
            try {
                val notificationInfo = notificationService.checkNotifications(loginData)
                setState {
                    selected = IsNotification.ThereIsRequest
                    notification = notificationInfo
                }
            } catch (e: StatusCodeException) {
                setState {
                    selected = IsNotification.ThereIsNotRequest
                }
            }
        }
    }
}