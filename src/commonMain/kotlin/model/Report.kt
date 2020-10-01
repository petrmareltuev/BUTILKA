package model

import kotlinx.serialization.Serializable

@Serializable
data class Report(
        var username: String,
        var password: String,
        var case_number: String,
        var participants:String,
        var victim:String,
        var witness:String,
        var comment:String
)