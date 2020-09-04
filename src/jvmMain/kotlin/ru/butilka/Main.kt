package ru.butilka

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.routing.get
import io.ktor.routing.routing
import kotlinx.html.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.*
import ru.butilka.database.Users
import ru.butilka.database.database
/*import java.sql.Connection
import java.sql.DriverManager
import java.sql.Statement
import ru.butilka.database.databaseInit*/

fun Application.main() {

    database {
        SchemaUtils.create(Users)
        Users.insert {
            it[username] = "Nick"
            it[password] = "qwerty"
            it[fullname] = "Nick Sinclare"
            it[organization] = "Moscow drugs "
            it[certificateId] = "AUE777"
            it[personId] = "VOR"
            it[issued] = "23.11.1989 Moscow "
            it[duty] = "police major"
            it[phone] = "89993450184"
            it[email] = "sniff_snus@scha.com"
            it[isMajor] = false
        }

        Users.selectAll().forEach{println("$it")}
    }

    /*val conn: Connection
    val statement: Statement

    val username = "root"
    val password = "mpibutilka"
    //val connectionURL = "jdbc:mysql://localhost:3306/butilka?serverTimezone=Europe/Moscow"
    val connectionURL = "jdbc:postgresql://localhost:5432/root"
    conn = DriverManager.getConnection(connectionURL, username, password)
    statement = conn.createStatement()
    databaseInit(statement)*/

    routing {

        get("/") {
            call.respondHtml {
                head {
                    meta {
                        charset = "utf-8"
                    }
                    title {
                        +"BUTILKA"
                    }
                }
                body {
                    div {
                        id = "react-app"
                        +"Loading..."
                    }

                    script(src = "/main.bundle.js") {}
                }
            }
        }

        static("/") {
            files("build/bundle")
        }
    }
}