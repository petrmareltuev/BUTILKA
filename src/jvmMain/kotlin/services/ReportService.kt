package services

import database.Reports
import database.database
import model.Report
import org.jetbrains.exposed.sql.insert

actual class ReportService{
    actual suspend fun sendReport(report: Report): String {
        database{
            Reports.insert {
                it[caseNumber] = report.case_number
                it[participants] = report.participants
                it[victim] = report.victim
                it[witness] = report.witness
                it[comment] = report.comment
            }
        }.let{
            return "OK"
        }
    }
}


