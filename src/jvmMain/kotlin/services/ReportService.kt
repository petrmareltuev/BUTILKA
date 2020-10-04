package services

import database.*
import database.Lohs.passportSerialNumber
import model.Report
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select

actual class ReportService{
    actual suspend fun sendReport(report: Report): String {
        return database{
            Lohs.select { passportSerialNumber eq report.victim }.firstOrNull()?.let{ resultRow ->
                Reports.insert {
                    it[caseNumber] = report.case_number
                    it[participants] = report.participants
                    it[victim] = report.victim
                    it[witness] = report.witness
                    it[comment] = report.comment
                    it[lohName] = resultRow[Lohs.fullname]
                }.let{ "OK"}
            }?: "Not OK"

        }
    }
}

