package services

import database.Drugs
import database.database
import model.Drug
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.insert
actual class AddDrugsService{
    actual suspend fun addDrugs(drug: Drug): Boolean {

        database{
            Drugs.insert {
                it[Drugs.drugType] = drug.drugType
                it[Drugs.drugMass] = drug.drugMass.toInt()
            }
        }.let { return true }
    }

}


