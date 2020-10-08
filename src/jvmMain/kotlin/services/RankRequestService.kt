package services

import database.Requests
import database.Users
import database.database
import model.LoginData
import org.jetbrains.exposed.sql.*
import kotlin.random.Random.Default.nextInt

actual class RankRequestService{
    actual suspend fun checkRankRequest(loginData:LoginData):String{
        return database{
            Users.select{ Users.username eq loginData.username}.first().let{
                val userId = it[Users.userId]
                Requests.select{
                    Requests.majorId eq userId
                }.firstOrNull()?.let{
                    "YES"
                }?: "NOT"
            }
        }
    }
    actual suspend fun sendRankRequest(loginData: LoginData):String{

        var cN:String; do{ cN = nextInt(99999).toString() } while(checkCaseNumber(cN))

        val chosenShoha = database {
            Users.select { Users.isMajor eq false and (Users.busy eq false) }.firstOrNull()?.let { it[Users.userId] }
        }

        val majorId = database {
            Users.select { Users.username eq loginData.username }.first().let{it[Users.userId]}
        }

        if(chosenShoha==null){return "Нет доступного шохи"}
        else{
            database{
                Requests.insert {
                    it[Requests.majorId] = majorId
                    it[Requests.caseNumber] = cN
                    it[Requests.shockhaId] = chosenShoha
                    it[Requests.lohId] = 1
                }

                Users.update({ Users.userId eq chosenShoha}) {
                    it[busy] = true
                }
            }
            return "YES"
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