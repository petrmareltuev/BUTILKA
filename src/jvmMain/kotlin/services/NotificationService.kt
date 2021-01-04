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
                    if(req[Requests.lohId] != null)
                    {
                        Notification(
                            req[caseNumber],
                            Lohs.select{Lohs.lohId eq req[Requests.lohId]!!}.first().let{
                                Loh(
                                        it[Lohs.fullname],
                                        it[Lohs.passportSerialNumber],
                                        it[Lohs.registrationAddress],
                                        it[Lohs.issued],
                                        it[Lohs.subdivisionCode]
                                )
                            },
                            Drugs.select{Drugs.drugId eq req[Requests.drugId]}.first().let{it[Drugs.drugType]},
                            Drugs.select{Drugs.drugId eq req[Requests.drugId]}.first().let{it[Drugs.drugMass]}
                        )
                    }
                    else
                        throw NoNotificationException("There is notification, but all lohs is jailed")
                }?: throw NoNotificationException("There is no notification with such userId")
            }?: throw NoNotificationException("There is no such user")

        }
    }
}

class NoNotificationException(override val message: String?) : Throwable()

