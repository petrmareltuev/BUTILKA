package routing

import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.receiveText
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json
import model.LoginData
import model.Stat
import services.StatsService

@OptIn(UnstableDefault::class)
fun Route.stats() {
    post("/stats") {
        val receivedText = call.receiveText()
        println("stats request: $receivedText")
        //TODo valiation
        val loginData = Json.parse(LoginData.serializer(), receivedText)

        val statsService = StatsService()
        try{

            val stats = statsService.getStats(loginData)
            call.respondText(Json.stringify(Stat.serializer(),stats), contentType = ContentType.Application.Json)
        }
        catch (e: IllegalArgumentException){
            //call.respondText("There is not such user", contentType = ContentType.Application.Json)
            call.response.status(HttpStatusCode.Unauthorized)
        }
    }
}
