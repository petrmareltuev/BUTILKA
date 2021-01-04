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
import model.Drug
import model.Loh
import services.AddDrugsService

@OptIn(UnstableDefault::class)
fun Route.addDrugs() {
    post("/addDrugs") {

        val receivedText = call.receiveText()
        println("add Drugs: $receivedText")

        val drug = Json.parse(Drug.serializer(), receivedText)

        val addDrugsService = AddDrugsService()
        try{
            if(addDrugsService.addDrugs(drug)){
                call.respondText(Json.stringify(Boolean.serializer(), true), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(Boolean.serializer(), false), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown error while adding Drugs: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
