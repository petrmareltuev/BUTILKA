package services

import kotlinx.serialization.builtins.serializer
import model.Drug
import model.Loh
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class AddDrugsService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun addDrugs(drug: Drug): Boolean {
        return transport.post("addDrugs", Boolean.serializer(), JSON.stringify(drug))
    }
}