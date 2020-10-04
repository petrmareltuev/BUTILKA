package services

import database.Users
import database.database
import model.User
import model.LoginData
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.select

actual class LoginService{
    actual suspend fun login(loginData: LoginData): User {
        return database {
            Users.select { Users.username eq loginData.username and (Users.password eq loginData.password)}
                .firstOrNull()?.let {
                    User(
                        it[Users.username],
                        it[Users.password],
                        it[Users.fullName],
                        it[Users.organization],
                        it[Users.certificateId],
                        it[Users.personId],
                        it[Users.issued],
                        it[Users.duty],
                        it[Users.phone],
                        it[Users.email]
                    )
                } ?: throw IllegalArgumentException("There is not such user")
        }
    }
}


