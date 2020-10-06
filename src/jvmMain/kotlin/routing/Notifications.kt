package routing

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json
import model.LoginData
import model.Notification
import services.NoNotificationException
import services.NotificationService

@OptIn(UnstableDefault::class)
fun Route.notification() {
    post("/notifications") {
        val receivedText = call.receiveText()
        println("notifications request: $receivedText")

        val loginData = Json.parse(LoginData.serializer(), receivedText)

        val notificationService = NotificationService()
        try{
            val notification = notificationService.checkNotifications(loginData)
            call.respondText(Json.stringify(Notification.serializer(),notification), contentType = ContentType.Application.Json)
        }
        catch (e: NoNotificationException){
            call.response.status(HttpStatusCode.NoContent)
        }
    }
}

