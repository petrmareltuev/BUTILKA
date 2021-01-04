package view


import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.js.onClickFunction
import model.LoginData
import model.Stat
import react.*
import react.dom.*
import services.StatsService

fun RBuilder.statsComponent(goUser: () -> Unit, scope: CoroutineScope) = child(StatsComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

enum class IsStats {
    StatsReady,
    Loading
}

external interface StatsProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface StatsPageState: RState{
    var selected: IsStats
    var stat: Stat
}

class StatsComponent : RComponent<StatsProps, StatsPageState>() {

    override fun StatsPageState.init() {
        selected = IsStats.Loading
    }

    override fun RBuilder.render() {

        when (state.selected) {
            IsStats.Loading -> h1(classes = "pageTitle") {
                +"Загрузка..."
                getStats()
            }

            IsStats.StatsReady -> div {

                h1 (classes ="pageTitle"){+"Открытых дел: ${state.stat.openedCases}" }
                h1 (classes ="pageTitle"){+"Закрытых дел: ${state.stat.closedCasses}" }
                h1 (classes ="pageTitle"){+"Доступных лохов: ${state.stat.availableLohs}" }

                for (drug in state.stat.drugs){
                    h1 (classes ="pageTitle"){+"${drug.first}: ${drug.second} гр." }
                }

                p {
                    button(classes = "App-buttons") {
                        span {
                            +"Назад"
                        }
                        attrs {
                            onClickFunction = {
                                props.goUser()
                            }
                        }

                    }
                }
            }
        }
    }

    private fun getStats() {
        props.coroutineScope.launch {
            val loginData = LoginData(currentUser?.username!!, currentUser?.password!!)
            val statsService = StatsService(coroutineContext)
            val response = statsService.getStats(loginData)
            setState{
                selected = IsStats.StatsReady
                stat = response
            }
        }
    }


}