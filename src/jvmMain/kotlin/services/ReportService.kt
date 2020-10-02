package services

import database.*
import database.Lohs.passportSerialNumber
import model.Report
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.insertIgnore
import org.jetbrains.exposed.sql.select

actual class ReportService{
    actual suspend fun sendReport(report: Report): String {
        return database{
            Lohs.select { Lohs.passportSerialNumber eq report.victim }.firstOrNull()?.let{
                println(it[passportSerialNumber])
                val loh = it[Lohs.fullname]
                Reports.insert {
                    it[caseNumber] = report.case_number
                    it[participants] = report.participants
                    it[victim] = report.victim
                    it[witness] = report.witness
                    it[comment] = report.comment
                    it[lohName] = loh
                }.let{ "OK"}
            }?: "Not OK"

        }
    }
}

