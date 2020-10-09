package services

import database.*
import model.LoginData
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import javax.management.Query.and
import kotlin.random.Random.Default.nextInt
import kotlin.random.Random.Default.nextLong

actual class RankRequestService{
    actual suspend fun checkRankRequest(loginData:LoginData):String{
        return database{
            Users.select{ Users.username eq loginData.username}.first().let{
                val userId = it[Users.userId]
                Requests.select{ Requests.majorId eq userId and (Requests.resolved eq false)} // TODO another answer for resolved request
                }.firstOrNull()?.let{
                    "YES"
            }?: "NOT"
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

        val chosenLoh = database {
            Lohs.select { Lohs.jailed eq false }.firstOrNull()?.let { it[Lohs.lohId] }
        }
        
        val count = database{
            Drugs.selectAll().count()
        }
        
        val drugId = nextLong(count)
        
        
        database{
            Requests.insert {
                it[Requests.majorId] = majorId
                it[Requests.caseNumber] = cN
                it[Requests.shockhaId] = chosenShoha
                it[Requests.lohId] = chosenLoh
                it[resolved] = false
                it[Requests.drugId] = drugId.toInt()
            }

            if (chosenShoha!= null) {
                Users.update({ Users.userId eq chosenShoha }) { it[busy] = true }
            }

            if (chosenLoh!=null){
                Lohs.update({ Lohs.lohId eq chosenLoh}){it[jailed]= true}
            }
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
