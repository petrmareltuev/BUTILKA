package model

import kotlinx.serialization.Serializable

@Serializable
data class Notification(
        var case_number: String,
        var loh: Loh,
        var drugName: String,
        var drugMass: Int)

