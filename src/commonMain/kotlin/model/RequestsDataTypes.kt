package model

import kotlinx.serialization.Serializable

@Serializable
data class LoginData(
        var username:String,
        var password: String
)

@Serializable
data class User(
        var username:String,
        var password:String,
        var full_name:String,
        var organization:String,
        var certificate_id:String,
        var personal_id:String,
        var issued:String,
        var duty:String,
        var phone:String,
        var email:String)

@Serializable
data class CaseInfo(
        var username: String,
        var password: String,
        var participant:String,
        var victim:String,
        var witness:String,
        var comment:String
)