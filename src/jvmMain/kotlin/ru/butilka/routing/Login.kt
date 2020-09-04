package ru.butilka.routing

import io.ktor.application.call
import io.ktor.http.ContentType
import io.ktor.request.receive
import io.ktor.request.receiveText
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.*
import ru.butilka.LoginData
import ru.butilka.User
import ru.butilka.database.Users
import java.sql.Connection
import java.sql.Statement
import ru.butilka.database.database

fun Route.login() {
    post("/login") {
        println("POST received ${call.receiveText()}")
        /*val userData = call.receive<LoginData>()
        println(userData.username + " " + userData.password)
        database {
            val result = Users.select{Users.username eq userData.username and (Users.password eq userData.username)}
            result.forEach { println("$it")}
        }*/
        call.respondText("Hello, i can see u", contentType = ContentType.Text.Html)

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
