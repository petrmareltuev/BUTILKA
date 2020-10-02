import database.*
import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.ContentNegotiation
import io.ktor.jackson.jackson
import io.ktor.routing.routing
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.insertIgnore
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
        SchemaUtils.create(Requests)
    }

    routing {
        initGet()
        appcss()
        login()
        register()
        report()
        request()
    }
    database{
    Lohs.insertIgnore {
        it[fullname] = "Иван Голунов"
        it[passportSerialNumber] = "1337420360"
        it[registrationAddress] = "г. Москва, ул. Пушкина. д. Колотушкина"
        it[issuedBy] = "ГУ МВД ПО МОРДОРСКОЙ ОБЛАСТИ"
        it[dateOfIssue] = "12.09.2020"
        it[subdivisionCode] = "870-912"
    }
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