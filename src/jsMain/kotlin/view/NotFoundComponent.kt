package view

import react.*
import react.dom.*

fun RBuilder.notFoundComponent() = child(NotFoundComponent::class) {
}

class NotFoundComponent : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        div("") {
            div {
                h1 (classes= "pageTitle"){ +"Not Found" }
            }
        }
    }
}
