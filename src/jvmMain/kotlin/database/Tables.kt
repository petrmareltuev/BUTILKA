package database

import org.jetbrains.exposed.sql.Table

object Users: Table() {
    val userId = integer("userId").uniqueIndex().autoIncrement()
    val username = varchar("username", 50)
    val password = varchar("password", 50)
    val fullName = varchar("fullname", 50)
    val organization = varchar("organization", 50)
    val certificateId = varchar("certificateId", 10)
    val personId = varchar("personId", 10)
    val issued = varchar("issued", 70)
    val duty = varchar("duty", 20)
    val phone = varchar("phone", 15)
    val email = varchar("email", 30)
    val isMajor = bool("isMajor")
    val busy = bool("busy")
    override val primaryKey = PrimaryKey(userId, name = "PK_UserId")
}

object Requests: Table(){
    val requestId = integer("requestId").uniqueIndex().autoIncrement()
    val caseNumber = varchar("caseNumber", 20)
    val majorId = integer("majorId")
    val drugId = integer("drugId")
    val shockhaId = integer("ShockhaId").nullable()
    val lohId = integer("LohId").nullable()
    var resolved = bool("resolved")
    override val primaryKey = PrimaryKey(requestId, name = "PK_RequestId")

}

object Reports: Table(){
    val reportId = integer("reportId").uniqueIndex().autoIncrement()
    val caseNumber = varchar("caseNumber", 20)
    val participants = varchar("participants", 300)
    val victim = varchar("victim", 70)
    val witness = varchar("witness", 150)
    val comment = varchar("comment", 200)
    val lohName = varchar("lohName", 200)
    override val primaryKey = PrimaryKey(reportId, name = "PK_ReportId")
}

object Lohs: Table(){
    val lohId = integer("lohId").uniqueIndex().autoIncrement()
    val fullname = varchar("fullname", 50)
    val passportSerialNumber = varchar("passportSerialNumber", 10)
    val registrationAddress = varchar("registrationAddress", 50)
    val issuedBy = varchar("issuedBy", 50)
    val dateOfIssue = varchar("dateOfIssue", 20)
    val subdivisionCode = varchar("subdivisionCode", 20)
    override val primaryKey = PrimaryKey(fullname, name = "PK_Loh")
    var jailed = bool("jailed")
}
object Drugs: Table(){
    val drugId = integer("drugId").uniqueIndex().autoIncrement()
    val drugType = varchar("drugType", 50).uniqueIndex()
    val drugMass = integer("drugMass")
}
