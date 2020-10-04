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
import model.User
import services.RegisterService

@OptIn(UnstableDefault::class)
fun Route.register() {
    post("/register") {

        val receivedText = call.receiveText()
        println("register request: $receivedText")

        val user = Json.parse(User.serializer(), receivedText)

        val registerService = RegisterService()
        try{
            if(registerService.register(user)){
                call.respondText(Json.stringify(Boolean.serializer(), true), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(Boolean.serializer(), false), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown registration error: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
