package services

import kotlinx.serialization.builtins.serializer
import model.Report
import rpc.Transport
import kotlin.coroutines.CoroutineContext


actual class ReportService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun sendReport(report: Report): String {
        return transport.post("report", String.serializer(), JSON.stringify(report))
    }
}