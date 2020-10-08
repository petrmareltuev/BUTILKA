package services

import database.*
import database.Lohs.lohId
import database.Requests.caseNumber
import database.Users.userId
import model.LoginData
import model.Loh
import model.Notification
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.select

actual class NotificationService{
    actual suspend fun checkNotifications(loginData: LoginData): Notification {
        return database{
            Users.select { Users.username eq loginData.username }.firstOrNull()?.let{ user ->
                val shockha = user[userId]
                Requests.select { Requests.shockhaId eq shockha and (Requests.resolved eq false)
                }.firstOrNull()?.let{ req ->
                    Notification(
                        req[caseNumber],
                        Lohs.select{lohId eq 1}.first().let{
                            Loh(
                                    it[Lohs.fullname],
                                    it[Lohs.passportSerialNumber],
                                    it[Lohs.registrationAddress],
                                    it[Lohs.issuedBy],
                                    it[Lohs.dateOfIssue],
                                    it[Lohs.subdivisionCode]
                            )
                        }
                )
                }
            }?: throw NoNotificationException("There no notification with such userId")

        }
    }
}

class NoNotificationException(override val message: String?) : Throwable()

