import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.ContentNegotiation
import io.ktor.html.respondHtml
import io.ktor.http.content.files
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.routing.get
import io.ktor.routing.routing
import kotlinx.html.*
import org.jetbrains.exposed.sql.SchemaUtils
import database.Users
import database.database
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import routing.appcss
import routing.login

fun Application.main() {

    install(CORS) {
        header("Content-Type")
        anyHost() // @TODO: Don't do this in production if possible. Specify address of WDS server
    }
    install(ContentNegotiation) {
        jackson{}
    }

    //TODO go to apache httpclient
    //TODO add routing of all requests
    //TODO add serialization for json parsing and delete ToString method in common
    //TODO refactor react views
    //TODO launch database queries with coroutines
    //TODO main.bundle.js is too big
    //TODO add data validation
    //TODO strings more than 20 symbols dont accepted by database


    database {
        SchemaUtils.create(Users)

        /*Users.insert {
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

        Users.selectAll().forEach { println("$it") }*/
    }

    routing {

        login()

        appcss()

        get("/") {
            call.respondHtml {
                head {
                    meta {
                        charset = "utf-8"
                    }

                    title {
                        +"BUTILKA"
                    }
                    link {
                        href = "https://fonts.googleapis.com/css2?family=Aclonica&display=swap"
                        rel = "stylesheet"
                    }
                    link {
                        rel = "icon"
                        type = "image/png"
                        sizes = "16x16"
                        href = "favicon.png"
                    }
                    link{
                        href = "App.css"
                        rel="stylesheet"
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