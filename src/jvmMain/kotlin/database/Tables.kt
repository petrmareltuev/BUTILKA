package database

import org.jetbrains.exposed.dao.id.IntIdTable

object Users: IntIdTable() {
    val userId = integer("userId").uniqueIndex().autoIncrement()
    val username = varchar("username", 50)
    val password = varchar("password", 50)
    val fullname = varchar("fullname", 50)
    val organization = varchar("organization", 50)
    val certificateId = varchar("certificateId", 10)
    val personId = varchar("personId", 10)
    val issued = varchar("issued", 70)
    val duty = varchar("duty", 20)
    val phone = varchar("phone", 15)
    val email = varchar("email", 30)
    val isMajor = bool("isMajor")
    override val primaryKey = PrimaryKey(userId,name = "pk_Users")
}

object Requests: IntIdTable(){
    val requestId = integer("requestId").uniqueIndex().autoIncrement()
    val userId = integer("userId")
}
object Reports: IntIdTable(){
    val reportId = integer("reportId").uniqueIndex().autoIncrement()
    val caseNumber = varchar("caseNumber", 20)
    val participants = varchar("participants", 300)
    val victim = varchar("victim", 70)
    val witness = varchar("witness", 150)
    val comment = varchar("comment", 200)

}