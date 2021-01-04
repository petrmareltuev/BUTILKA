package services

import model.*

expect class LoginService {
    suspend fun login(loginData: LoginData): User
}

expect class RegisterService{
    suspend fun register(user:User):Boolean
}

expect class ReportService{
    suspend fun sendReport(report: Report):String
}

expect class RankRequestService{
    suspend fun checkRankRequest(loginData: LoginData):String
    suspend fun sendRankRequest(loginData: LoginData):String
}

expect class NotificationService{
    suspend fun checkNotifications(loginData: LoginData):Notification
}

expect class StatsService{
    suspend fun getStats(loginData: LoginData): Stat
}

expect class AddLohService{
    suspend fun addLoh(loh: Loh): String
}

expect class AddDrugsService{
    suspend fun addDrugs(drug: Drug): Boolean
}

expect class ChangeLohInfoService{
    suspend fun checkLoh(lohPassport: String): Boolean
    suspend fun changeLohInfo(lohUpdate: LohUpdate): Boolean
}