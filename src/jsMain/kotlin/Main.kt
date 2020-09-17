import kotlinext.js.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import react.buildElement
import react.dom.render
import view.ApplicationComponent
import kotlin.browser.document
import kotlin.coroutines.CoroutineContext

private class Application: CoroutineScope {
    override val coroutineContext: CoroutineContext = Job()

    fun start() {

        //TODO styles don't working
        requireAll(require.context("BUTILKA", true, js("/\\.css$/")))

        document.getElementById("react-app")?.let {
            render(buildElement {
                child(ApplicationComponent::class) {
                    attrs.coroutineScope = this@Application
                }
            }, it)
        }
    }
}

fun main() {
    //TODO delete globalStyles
    //GlobalStyles.inject()
    Application().start()
}