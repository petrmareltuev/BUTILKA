package routing

import io.ktor.application.call
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.get
import java.io.File
import java.nio.file.Paths

fun Route.appCss() {
    get("/App.css") {
        val path = Paths.get("").toAbsolutePath().toString()
        val f = File("${path}/src/jvmMain/resources")
        call.respondFile(f, "App.css") {}
    }
}

