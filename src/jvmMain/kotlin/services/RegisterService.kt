package services

import database.Users
import database.database
import model.User
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select

actual class RegisterService{
    actual suspend fun register(user:User): Boolean {
        if (checkUser(user)){
            return false
        }
        else database{
            Users.insert {
                it[username] = user.username
                it[password] = user.password
                it[fullName] = user.full_name
                it[organization] = user.organization
                it[certificateId] = user.certificate_id
                it[personId] = user.personal_id
                it[issued] = user.issued
                it[duty] = user.duty
                it[phone] = user.phone
                it[email] = user.email
                it[isMajor] = true
            }
        }.let { return true }
    }

    private fun checkUser(user:User):Boolean{
        return database {
            Users.select { Users.username eq user.username}.firstOrNull()?.let {true} ?: false
        }
    }
}


