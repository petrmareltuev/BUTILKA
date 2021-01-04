package routing

import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json
import model.Loh
import model.LohUpdate
import services.AddLohService
import services.ChangeLohInfoService

@OptIn(UnstableDefault::class)
fun Route.changeLohInfo() {
    post("/changeLohInfo") {

        val receivedText = call.receiveText()
        println("changeLohInfo: $receivedText")

        val lohUpdate = Json.parse(LohUpdate.serializer(), receivedText)

        val changeLohInfoService = ChangeLohInfoService()
        try{
                call.respondText(Json.stringify(Boolean.serializer(), changeLohInfoService.changeLohInfo(lohUpdate)), contentType = ContentType.Application.Json)
        }
        catch (e: Exception){
            println("Unknown error while adding Loh: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
    post("/checkLoh") {

        val receivedText = call.receiveText()
        println("checkLoh: $receivedText")

        val lohPassport = Json.parse(String.serializer(), receivedText)

        val changeLohInfoService = ChangeLohInfoService()
        try{
            call.respondText(Json.stringify(Boolean.serializer(), changeLohInfoService.checkLoh(lohPassport)), contentType = ContentType.Application.Json)
        }
        catch (e: Exception){
            println("Unknown error while checking Loh passport: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
