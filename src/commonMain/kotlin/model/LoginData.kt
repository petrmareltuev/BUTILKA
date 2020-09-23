package model

import kotlinx.serialization.Serializable

@Serializable
data class LoginData(
        val username:String,
        val password: String
)

