package model

import kotlinx.serialization.Serializable

@Serializable
data class Loh(
        var fullname:String,
        var passportSerialNumber:String,
        var registrationAddress:String,
        var issued:String,
        var subdivisionCode:String
)