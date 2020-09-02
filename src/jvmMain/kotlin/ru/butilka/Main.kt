package ru.butilka

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.routing.get
import io.ktor.routing.routing
import kotlinx.css.*
import kotlinx.css.properties.lh
import kotlinx.html.*
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.sql.Statement

fun Application.main() {


    /*val conn: Connection
    val statement: Statement

    val username = "root"
    val password = "bdgefcbvC"
    val connectionURL = "jdbc:mysql://localhost:3306/butilka?serverTimezone=Europe/Moscow"

    conn = DriverManager.getConnection(connectionURL, username, password)
    print("Connection to butilka DB established`")
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
                        +"Kotlin multiplatform react application demo"
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