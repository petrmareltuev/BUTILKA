package services

import database.Requests
import database.Users
import database.database
import model.LoginData
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import kotlin.random.Random.Default.nextInt

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
                    var cN: String
                    do{ cN = nextInt(99999).toString() }
                    while(checkCaseNumber(cN))
                    it[Requests.userId] = userId
                    it[caseNumber] =  cN
                }.let{"YES"}
            }
        }
    }

    private fun checkCaseNumber (cN: String):Boolean{
        return database {
            Requests.select{
                Requests.caseNumber eq cN
            }.firstOrNull()?.let{true}?: false
        }
    }
}