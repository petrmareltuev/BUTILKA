package services

import kotlinx.serialization.builtins.serializer
import model.Loh
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class AddLohService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun addLoh(loh: Loh): String {
        return transport.post("addLoh", String.serializer(), JSON.stringify(loh))
    }
}