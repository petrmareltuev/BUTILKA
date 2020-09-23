package routing

import io.ktor.application.call
import io.ktor.html.*
import io.ktor.http.content.*
import io.ktor.routing.*
import kotlinx.html.*

fun Route.initGet() {
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
