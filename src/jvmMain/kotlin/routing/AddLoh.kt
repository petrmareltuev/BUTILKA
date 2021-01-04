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
import services.AddLohService

@OptIn(UnstableDefault::class)
fun Route.addLoh() {
    post("/addLoh") {

        val receivedText = call.receiveText()
        println("add Loh: $receivedText")

        val loh = Json.parse(Loh.serializer(), receivedText)

        val addLohService = AddLohService()
        try{
            if(addLohService.addLoh(loh) == "OK"){
                call.respondText(Json.stringify(String.serializer(), "OK"), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(String.serializer(), "Exists"), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown error while adding Loh: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
