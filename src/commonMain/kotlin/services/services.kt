package services

import model.LoginData
import model.Report
import model.User

expect class LoginService {
    suspend fun login(loginData: LoginData): User
}

expect class RegisterService{
    suspend fun register(user:User):Boolean
}

expect class ReportService{
    suspend fun sendReport(report: Report):String
}