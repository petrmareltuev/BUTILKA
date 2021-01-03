package services

import database.Drugs
import database.database
import model.LoginData
import model.Stat
import org.jetbrains.exposed.sql.selectAll

actual class StatsService{
    actual suspend fun getStats(loginData: LoginData): Stat {
        return database {
            Stat(Drugs.selectAll().first().let{it[Drugs.drugType]})
        }
    }
}


