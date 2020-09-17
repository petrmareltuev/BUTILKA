package routing

import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.receiveText
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.json.Json
import model.LoginData
import model.User
import services.LoginService


fun Route.login() {
    post("/login") {
        val receivedText = call.receiveText()
        println("login request: $receivedText")
        val loginData = Json.parse(LoginData.serializer(), receivedText)
        val loginService = LoginService()
        try{
            val user = loginService.login(loginData)
            call.respondText(Json.stringify(User.serializer(),user), contentType = ContentType.Application.Json)
        }
        catch (e: IllegalArgumentException){
            //call.respondText("There is not such user", contentType = ContentType.Application.Json)
            call.response.status(HttpStatusCode.Unauthorized)
        }
    }
}
