package model

import kotlinx.serialization.Serializable

@Serializable
data class Drug(
        val drugType:String,
        val drugMass: String
)

