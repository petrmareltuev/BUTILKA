package model

import kotlinx.serialization.Serializable

@Serializable
data class CaseInfo(
        var username: String,
        var password: String,
        var participant:String,
        var victim:String,
        var witness:String,
        var comment:String
)