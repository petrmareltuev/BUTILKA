package model

import kotlinx.serialization.Serializable

@Serializable
data class Stat(
    var openedCases: Int,
    var closedCasses: Int,
    var availableLohs: Int,

    var drugs: List<Pair<String, Int>>
)

