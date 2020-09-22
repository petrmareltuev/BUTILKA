// import kotlinext.js.invoke // deprecated?

import kotlinx.css.*
import styled.StyledComponents
import styled.injectGlobal

object GlobalStyles {
    fun inject() {
        val styles = CSSBuilder(allowClasses = false).apply {
            body {
                margin(0.px)
                padding(0.px)
                put("background", "rgb(95,67,236)")
                put("background", "linear-gradient(180deg, rgba(95,67,236,1) 0%, rgba(243,252,255,1) 150%)")
                put("height", "100%")
                textAlign = TextAlign.center
            }
            html{
                position = Position.relative
                //minHeight = 100.px
                put("min-height", "100%")
            }
            ruleSet {
                fontFace(""){
                    fontFamily = "Aclonica"
                    put("src", "url(\"Aclonica-Regular.ttf\")")
                }
            }
        }

        StyledComponents.injectGlobal(styles.toString())
    }
} 