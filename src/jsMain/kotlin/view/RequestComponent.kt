package view

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.js.onClickFunction
import model.LoginData
import react.*
import react.dom.*
import services.RankRequestService

enum class IsRequest {
    ThereIsRequest,
    ThereIsNotRequest,
    Loading
}

fun RBuilder.requestComponent(goUser: () -> Unit, scope: CoroutineScope) = child(RequestComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface RequestProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface RequestPageState: RState{
    var message: String
    var selected: IsRequest
}

class RequestComponent : RComponent<RequestProps, RequestPageState>() {

    override fun RequestPageState.init() {
        message= ""
        selected = IsRequest.Loading
    }

/*
    private val coroutineContext
        get() = props.coroutineScope.coroutineContext*/
    override fun RBuilder.render() {
        div {

            when (state.selected) {
                IsRequest.Loading -> h1 (classes ="pageTitle"){ +"Загрузка..."
                    checkRequest()
                }
                IsRequest.ThereIsNotRequest -> {
                    p {
                        button(classes = "App-buttons") {
                            span {
                                +"Отправить заявку"
                            }
                            attrs {
                                onClickFunction = {
                                    doRequest()
                                }
                            }

                        }
                    }
                }
                IsRequest.ThereIsRequest ->h1 (classes ="pageTitle"){ +"Ваша заявка обрабатывается" }
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

    private fun doRequest() {
        props.coroutineScope.launch {
            val loginData = LoginData(currentUser?.username!!, currentUser?.password!!)
            val rankRequestService = RankRequestService(coroutineContext)
            val response = rankRequestService.sendRankRequest(loginData)
            if (response=="YES"){
                setState{
                    selected = IsRequest.ThereIsRequest
                }
            }
            else{
                setState{
                    message = response
                }
            }
        }
    }

    private fun checkRequest() {
        props.coroutineScope.launch {
            val rankRequestService = RankRequestService(coroutineContext)
            val loginData = LoginData(currentUser?.username!!, currentUser?.password!!)
            val response = rankRequestService.checkRankRequest(loginData)
            if (response=="YES"){
                setState{
                    selected = IsRequest.ThereIsRequest
                }
            }
            else{
                setState{
                    selected = IsRequest.ThereIsNotRequest
                }
            }
        }
    }
}