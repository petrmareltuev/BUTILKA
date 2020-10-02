package model

import kotlinx.serialization.Serializable

@Serializable
data class Lohs(
        var lohId:String,
        var fullname:String,
        var passportSerialNumber:String,
        var registrationAddress:String,
        var issuedBy:String,
        var dateOfIssue:String,
        var subdivisionCode:String
)