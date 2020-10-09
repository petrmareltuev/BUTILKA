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
        appCss()
        login()
        register()
        report()
        request()
        notification()
    }
    database{
        Lohs.insertIgnore {
            it[fullname] = "Иван Голунов"
            it[passportSerialNumber] = "1337420360"
            it[registrationAddress] = "г. Москва, ул. Пушкина. д. Колотушкина"
            it[issuedBy] = "ГУ МВД ПО МОРДОРСКОЙ ОБЛАСТИ"
            it[dateOfIssue] = "12.09.2020"
            it[subdivisionCode] = "870-912"
            it[jailed]= false
        }
        Lohs.insertIgnore {
            it[fullname] = "Вася Тракторист"
            it[passportSerialNumber] = "9306592847"
            it[registrationAddress] = "г. Челябинск, ул. Сталелитейная. д.23 "
            it[issuedBy] = "ГУ МВД ПО Г. ЧЕЛЯБИНСК"
            it[dateOfIssue] = "11.11.2010"
            it[subdivisionCode] = "810-812"
            it[jailed]= false
        }
        Lohs.insertIgnore {
            it[fullname] = "Твой батя"
            it[passportSerialNumber] = "9838471048"
            it[registrationAddress] = "г. Чита, ул. Ленина. д. 6"
            it[issuedBy] = "ГУ МВД ПО ЧИТИНСКОЙ ОБЛАСТИ"
            it[dateOfIssue] = "02.06.1998"
            it[subdivisionCode] = "100-641"
            it[jailed]= false
        }
        Drugs.insertIgnore {
            it[drugType] = "Марихуана"
            it[drugMass] = 20
        }
        Drugs.insertIgnore {
            it[drugType] = "Гашиш"
            it[drugMass] = 15
        }
        Drugs.insertIgnore {
            it[drugType] = "Кокаин"
            it[drugMass] = 5
        }
        Drugs.insertIgnore {
            it[drugType] = "Лсд"
            it[drugMass] = 1
        }
        Drugs.insertIgnore {
            it[drugType] = "Героин"
            it[drugMass] = 5
        }
        Drugs.insertIgnore {
            it[drugType] = "Метамфетамин"
            it[drugMass] = 9
        }
        Drugs.insertIgnore {
            it[drugType] = "Амфетамин"
            it[drugMass] = 10
        }
        Drugs.insertIgnore {
            it[drugType] = "Курительные смеси"
            it[drugMass] = 30
        }

    }
}