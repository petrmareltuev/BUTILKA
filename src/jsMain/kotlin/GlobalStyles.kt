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
                //height = 100.px
                //textAlign = TextAlign.center
                //backgroundColor = rgb(95,67,236)
                //background = lineargradient(180deg, rgba(95,67,236,1) 0%, rgba(243,252,255,1) 150%);
            }
            html{
                position = Position.absolute
                minHeight = 100.px
            }
        }

        StyledComponents.injectGlobal(styles.toString())
    }
} 