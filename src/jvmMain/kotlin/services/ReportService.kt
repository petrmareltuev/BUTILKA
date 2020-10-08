package services

import database.*
import database.Lohs.passportSerialNumber
import model.LoginData
import model.Report
import org.jetbrains.exposed.dao.Entity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.update

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
                }.let{
                    val user = Requests.select{Requests.lohId eq resultRow[Lohs.lohId]}.firstOrNull()?.let{it[Requests.shockhaId]}
                    Requests.update({Requests.lohId eq resultRow[Lohs.lohId]}){it[resolved] = true }

                    if(user !=  null){
                        Users.update({Users.userId eq user}){it[busy] = false}
                        Requests.select{ Requests.shockhaId.isNull()}.firstOrNull()?.let{resultRow->
                            val chosenLoh = database {
                                Lohs.select { Lohs.jailed eq false }.firstOrNull()?.let { it[Lohs.lohId] }
                            }

                            Requests.update({Requests.requestId eq resultRow[Requests.requestId]}){
                                it[Requests.shockhaId] = user
                            }

                            Users.update({ Users.userId eq user }) { it[busy] = true }
                        }
                    }

                }.let{ "OK"}
            }?: "Not OK"
        }
    }
}


