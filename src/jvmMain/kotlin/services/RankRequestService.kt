package services

import database.Requests
import database.Users
import database.database
import model.LoginData
import model.User
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import kotlin.random.Random.Default.nextInt
import kotlin.random.Random.Default.nextLong

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

                    var chosenUser:Int?
                    do{
                        val numberUsers = Users.selectAll().last().let{ it[Users.userId] }
                        val randomUser = nextInt(numberUsers)
                        chosenUser = Users.select{Users.isMajor eq false and (Users.busy eq false) and (Users.userId eq randomUser)
                        }.firstOrNull()?.let{it[Users.userId]}
                    } while(chosenUser == null)

                    it[shockhaId] =  chosenUser
                    Users.update({ Users.userId eq chosenUser }){
                        it[busy] = true
                    }

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