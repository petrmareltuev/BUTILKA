package services

import model.LoginData
import model.User
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class LoginService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun login(loginData: LoginData): User {
        return transport.post("login", User.serializer(), JSON.stringify(loginData))
    }
}