package routing

import database.Requests
import database.Users
import database.database
import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json
import model.LoginData
import model.User
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import services.RegisterService


fun Route.request() {
    post("/request") {

        val receivedText = call.receiveText()
        println("request request: $receivedText")

        val logindata = Json.parse(LoginData.serializer(), receivedText)

        suspend fun request(loginData:LoginData): Boolean {
            return database{
                Users.select{Users.username eq loginData.username}.first().let{
                    val userId = it[Users.userId]
                    Requests.insert{
                        it[Requests.userId] = userId
                        it[Requests.caseNumber] = "asfasdf"
                    }.let{true}
                }
            }
        }

        try{
            if(request(logindata)){
                call.respondText(Json.stringify(Boolean.serializer(), true), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(Boolean.serializer(), false), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown request error: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
    post("/request/check") {

        val receivedText = call.receiveText()
        println("request request: $receivedText")

        val logindata = Json.parse(LoginData.serializer(), receivedText)

        suspend fun checkReq(loginData:LoginData): Boolean {
            return database{
                Users.select{Users.username eq loginData.username}.first().let{
                    val userId = it[Users.userId]
                    Requests.select{
                        Requests.userId eq userId
                    }.firstOrNull()?.let{
                        true
                    }?: false
                }
            }
        }

        try{
            if(checkReq(logindata)){
                call.respondText(Json.stringify(Boolean.serializer(), true), contentType = ContentType.Application.Json)
            }
            else {
                call.respondText(Json.stringify(Boolean.serializer(), false), contentType = ContentType.Application.Json)
            }
        }
        catch (e: Exception){
            println("Unknown request error: ${e.message}\nCause: ${e.cause}, ")
            call.response.status(HttpStatusCode.fromValue(520))
        }
    }
}
