package routing

import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.receiveText
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json
import model.Report
import services.ReportService


fun Route.report() {
    post("/report") {
        val receivedText = call.receiveText()
        println("register request: $receivedText")
        val report = Json.parse(Report.serializer(), receivedText)

        val reportService = ReportService()
        try{
            if(reportService.sendReport(report)=="OK"){
                call.respondText(Json.stringify(String.serializer(), "OK"), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(String.serializer(), "Not OK"), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown error occurred during sending report: ${e.message}\nCause: ${e.cause}, ele")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
