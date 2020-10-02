import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.ContentNegotiation
import io.ktor.jackson.jackson
import io.ktor.routing.routing
import org.jetbrains.exposed.sql.SchemaUtils
import database.Users
import database.Reports
import database.Lohs
import database.database
import routing.*

fun Application.main() {

    install(CORS) {
        header("Content-Type")
        anyHost() // @TODO: Don't do this in production if possible. Specify address of WDS server
    }
    install(ContentNegotiation) {
        jackson{}
    }

    database {
        SchemaUtils.create(Users)
        SchemaUtils.create(Reports)
        SchemaUtils.create(Lohs)
    }

    routing {
        initGet()
        appcss()
        login()
        register()
        report()
    }
}

//TODO go to apache httpclient
//TODO add routing of all requests
//TODO refactor react views
//TODO launch database queries with coroutines
//TODO main.bundle.js is too big
//TODO add data validation
//TODO strings more than 20 symbols dont accepted by database
//TODO password encrypting
//TODO russian language support