package services

import database.Requests
import database.Users
import database.database
import model.LoginData
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select

actual class RankRequestService{
    actual suspend fun checkRankRequest(loginData:LoginData):String{
        return database{
            Users.select{ Users.username eq loginData.username}.first().let{
                val userId = it[Users.userId]
                Requests.select{
                    Requests.userId eq userId
                }.firstOrNull()?.let{
                    "YES"
                }?: "NOT"
            }
        }
    }
    actual suspend fun sendRankRequest(loginData: LoginData):String{
        return database{
            Users.select{Users.username eq loginData.username}.first().let{ resultRow ->
                val userId = resultRow[Users.userId]
                Requests.insert{
                    it[Requests.userId] = userId
                    it[caseNumber] = "123GH"
                }.let{"YES"}
            }
        }
    }
}