package services

import kotlinx.serialization.builtins.serializer
import model.User
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class RegisterService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun register(user: User): Boolean {
        return transport.post("register", Boolean.serializer(), JSON.stringify(user))
    }
}