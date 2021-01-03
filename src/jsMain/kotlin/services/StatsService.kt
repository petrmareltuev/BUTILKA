package services

import kotlinx.serialization.builtins.serializer
import model.LoginData
import model.Stat
import rpc.Transport
import kotlin.coroutines.CoroutineContext


actual class StatsService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun getStats(loginData: LoginData): Stat {
        return transport.post("stats", Stat.serializer(), JSON.stringify(loginData))
    }
}