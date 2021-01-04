package services

import kotlinx.serialization.builtins.serializer
import model.Loh
import model.LohUpdate
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class ChangeLohInfoService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun changeLohInfo(lohUpdate: LohUpdate): Boolean {
        return transport.post("changeLohInfo", Boolean.serializer(), JSON.stringify(lohUpdate))
    }

    actual suspend fun checkLoh(lohPassport: String): Boolean{
        return transport.post("checkLoh", Boolean.serializer(), JSON.stringify(lohPassport))
    }
}