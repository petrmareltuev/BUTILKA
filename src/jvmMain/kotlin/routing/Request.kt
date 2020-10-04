package routing

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json
import model.LoginData
import services.RankRequestService


@OptIn(UnstableDefault::class)
fun Route.request() {
    post("/request") {

        val receivedText = call.receiveText()
        println("request request: $receivedText")

        val loginData = Json.parse(LoginData.serializer(), receivedText)
        val rankRequestService = RankRequestService()

        try{
            call.respondText(Json.stringify(String.serializer(), rankRequestService.sendRankRequest(loginData)),
                    contentType = ContentType.Application.Json)
        }
        catch (e: Exception){
            println("Unknown request error: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
    post("/request/check") {

        val receivedText = call.receiveText()
        println("request request: $receivedText")

        val loginData = Json.parse(LoginData.serializer(), receivedText)
        val rankRequestService = RankRequestService()

        try{
            call.respondText(Json.stringify(String.serializer(), rankRequestService.checkRankRequest(loginData)),
                    contentType = ContentType.Application.Json)
        }
        catch (e: Exception){
            println("Unknown request error: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
