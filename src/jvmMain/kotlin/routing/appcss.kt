package routing

import io.ktor.application.call
import io.ktor.http.*
import io.ktor.request.receiveText
import io.ktor.response.*
import io.ktor.routing.Route
import io.ktor.routing.get
import java.io.File
import java.nio.file.Paths

fun Route.appcss() {
    get("/App.css") {
        val path = Paths.get("").toAbsolutePath().toString()
        val f = File("${path}/src/jvmMain/kotlin/routing")
        call.respondFile(f, "App.css",{})
    }
}

