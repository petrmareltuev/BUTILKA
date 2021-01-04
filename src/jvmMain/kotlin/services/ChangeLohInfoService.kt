package services

import database.Lohs
import database.Lohs.passportSerialNumber
import database.database
import model.Loh
import model.LohUpdate
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.update

actual class ChangeLohInfoService{
    actual suspend fun checkLoh(lohPassport: String): Boolean {
        return checkLohPass(lohPassport)
    }

    actual suspend fun changeLohInfo(lohUpdate: LohUpdate): Boolean {
        if (checkLohPass(lohUpdate.oldPassport)) {
            return database {
                Lohs.update({ Lohs.passportSerialNumber eq lohUpdate.oldPassport }) {
                    it[Lohs.fullname] = lohUpdate.loh.fullname
                    it[Lohs.passportSerialNumber] = lohUpdate.loh.passportSerialNumber
                    it[Lohs.registrationAddress] = lohUpdate.loh.registrationAddress
                    it[Lohs.issued] = lohUpdate.loh.issued
                    it[Lohs.subdivisionCode] = lohUpdate.loh.subdivisionCode
                }.let {true}
            }
        } else {return false}
    }


    private fun checkLohPass(lohPassport: String):Boolean{
        return database {
            Lohs.select { Lohs.passportSerialNumber eq lohPassport}.firstOrNull()?.let {true} ?: false
        }
    }
}


