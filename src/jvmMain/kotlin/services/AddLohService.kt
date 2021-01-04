package services

import database.Lohs
import database.database
import model.Loh
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select

actual class AddLohService{
    actual suspend fun addLoh(loh: Loh): String {
        if (checkLoh(loh)){
            return "Exists"
        }
        else database{
            Lohs.insert {
                it[Lohs.fullname] = loh.fullname
                it[Lohs.passportSerialNumber] = loh.passportSerialNumber
                it[Lohs.registrationAddress] = loh.registrationAddress
                it[Lohs.issued] = loh.issued
                it[Lohs.subdivisionCode] = loh.subdivisionCode
                it[Lohs.jailed] = false
            }
        }.let { return "OK" }
    }

    private fun checkLoh(loh: Loh):Boolean{
        return database {
            Lohs.select { Lohs.passportSerialNumber eq loh.passportSerialNumber}.firstOrNull()?.let {true} ?: false
        }
    }
}


