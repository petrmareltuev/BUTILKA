package services

import model.User
import model.LoginData
import rpc.Transport
import kotlin.coroutines.CoroutineContext
import kotlin.js.Json

actual class LoginService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun login(loginData: LoginData): User {
        return transport.post("login", User.serializer(), JSON.stringify(loginData))
    }
}