package services

import model.LoginData
import model.User

expect class LoginService {
    suspend fun login(loginData: LoginData): User

    //TODO suspend fun logout(id:String)
}

expect class RegisterService{
    suspend fun register(user:User):Boolean
}