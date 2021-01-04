package services

import database.Drugs
import database.Lohs
import database.Requests
import database.database
import model.LoginData
import model.Stat
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll

actual class StatsService{
    actual suspend fun getStats(loginData: LoginData): Stat {
        return database {

            val lohs: MutableList<Pair<String, Int>> = mutableListOf()

            Drugs.selectAll().orderBy(Drugs.drugMass to SortOrder.DESC).limit(3).let { res ->

                for (drug in res) {
                    val p = Pair(drug[Drugs.drugType], drug[Drugs.drugMass])
                    lohs.add(p)
                }
            }

            Stat(
                Requests.select{Requests.resolved eq false}.count().toInt(),
                Requests.select{Requests.resolved eq true}.count().toInt(),
                Lohs.select{Lohs.jailed eq false}.count().toInt(),
                lohs
            )
        }
    }
}



