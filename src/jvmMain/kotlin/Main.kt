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
        SchemaUtils.create(Drugs)
    }

    routing {
        initGet()
        appCss()
        login()
        register()
        report()
        request()
        notification()
        stats()
        addLoh()
        addDrugs()
    }
    database{
        Lohs.insertIgnore {
            it[fullname] = "Иван Голунов"
            it[passportSerialNumber] = "1337420360"
            it[registrationAddress] = "г. Москва, ул. Пушкина. д. Колотушкина"
            it[issued] = "ГУ МВД ПО МОРДОРСКОЙ ОБЛАСТИ 12.09.2020"
            it[subdivisionCode] = "870-912"
            it[jailed]= false
        }
        Lohs.insertIgnore {
            it[fullname] = "Вася Тракторист"
            it[passportSerialNumber] = "9306592847"
            it[registrationAddress] = "г. Челябинск, ул. Сталелитейная. д.23 "
            it[issued] = "ГУ МВД ПО Г. ЧЕЛЯБИНСК 11.11.2010"
            it[subdivisionCode] = "810-812"
            it[jailed]= false
        }
        Lohs.insertIgnore {
            it[fullname] = "Твой батя"
            it[passportSerialNumber] = "9838471048"
            it[registrationAddress] = "г. Чита, ул. Ленина. д. 6"
            it[issued] = "ГУ МВД ПО ЧИТИНСКОЙ ОБЛАСТИ 02.06.1998"
            it[subdivisionCode] = "100-641"
            it[jailed]= false
        }


    }
}