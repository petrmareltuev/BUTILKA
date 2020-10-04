package services

import kotlinx.serialization.builtins.serializer
import model.LoginData
import rpc.Transport
import kotlin.coroutines.CoroutineContext


actual class RankRequestService(coroutineContext: CoroutineContext) {
    val transport = Transport(coroutineContext)
    actual suspend fun sendRankRequest(loginData: LoginData): String {
        return transport.post("request", String.serializer(), JSON.stringify(loginData))
    }

    actual suspend fun checkRankRequest(loginData: LoginData): String {
        return transport.post("request/check", String.serializer(), JSON.stringify(loginData))
    }
}