package routing

import database.Users
import database.database
import io.ktor.application.call
import io.ktor.http.ContentType
import io.ktor.request.receive
import io.ktor.request.receiveText
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.post
import kotlinx.serialization.json.Json
import kotlinx.serialization.parse
import model.LoginData
import model.User
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll

fun Route.login() {
    post("/login") {
        val req = call.receiveText()
        println(req)
        val userData = Json.parse(LoginData.serializer(), req)
        println(userData)


        /*println(userData.username + " " + userData.password)
        database {
            val result = Users.select{Users.username eq userData.username and (Users.password eq userData.username)}
            result.forEach { println("$it")}
        }

        val res = Users.select{Users.username eq "Nick"}.firstOrNull()?.let {
            User(
                    it[Users.username],
                    it[Users.password],
                    it[Users.fullname],
                    it[Users.organization],
                    it[Users.certificateId],
                    it[Users.personId],
                    it[Users.issued],
                    it[Users.duty],
                    it[Users.phone],
                    it[Users.email]
            )
        }*/

        call.respondText("Hello", contentType = ContentType.Application.Json)

        /*connection.prepareStatement("select * from users where username = ? and password = ?").use { ps ->
            ps.setString(1, userData.username)
            ps.setString(2, userData.password)
            ps.executeQuery().use { rs ->
                if (rs.next()) {

                    val user = User(rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), rs.getString(11))
                    call.respondText(user.toString(), contentType = ContentType.Text.Html)
                    println("Logged in user: ${userData.username}")
                }
                else{
                    call.respondText("Wrong username or password", contentType = ContentType.Text.Html)
                    println("Failed to login: ${userData.username} ${userData.password}")
                }
            }
        }*/

    }
}
