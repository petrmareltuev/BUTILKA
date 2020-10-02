package view

import io.konform.validation.Valid
import io.konform.validation.Validation
import io.konform.validation.jsonschema.maxLength
import io.konform.validation.jsonschema.minLength
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.js.onClickFunction
import kotlinx.serialization.builtins.serializer
import model.LoginData
import model.User
import react.*
import react.dom.*
import rpc.Transport
import services.RegisterService

fun RBuilder.requestComponent(goUser: () -> Unit, scope: CoroutineScope) = child(RequestComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface RequestProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface RequestPageState: RState{
    var Message: String
}

class RequestComponent : RComponent<RequestProps, RequestPageState>() {

    override fun RequestPageState.init() {
        Message= ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div {
            h1 {
                +"Заявка"
            }

            p() {
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

            p() {
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
        val loginData = LoginData(currentUser?.username!!, currentUser?.password!!)

        val transport = Transport(coroutineContext)
        suspend fun request(loginData: LoginData): Boolean {
            return transport.post("request", Boolean.serializer(), JSON.stringify(loginData))
        }

        props.coroutineScope.launch {
            val response = request(loginData)
            if (response){
                setState{
                    Message = "Ваша заявка находится в обработке"
                }
            }
            else{
                setState{
                    Message = "ХЗ почему не работает"
                }
            }
        }
    }
}