package services

import database.Requests
import database.Users
import database.database
import model.LoginData
import org.jetbrains.exposed.sql.*
import javax.management.Query.and
import kotlin.random.Random.Default.nextInt

actual class RankRequestService{
    actual suspend fun checkRankRequest(loginData:LoginData):String{
        return database{
            Users.select{ Users.username eq loginData.username}.first().let{
                val userId = it[Users.userId]
                Requests.select{ Requests.resolved eq false  and (Requests.majorId eq userId) // TODO another answer for resolved request
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

        database{
            Requests.insert {
                it[Requests.majorId] = majorId
                it[Requests.caseNumber] = cN
                it[Requests.shockhaId] = chosenShoha
                it[Requests.lohId] = 1
                it[resolved] = false
            }

            if (chosenShoha!= null)
            Users.update({ Users.userId eq chosenShoha}) { it[busy] = true }
        }

        return "YES"

    }


    private fun checkCaseNumber (cN: String):Boolean{
        return database {
            Requests.select{
                Requests.caseNumber eq cN
            }.firstOrNull()?.let{true}?: false
        }
    }


}