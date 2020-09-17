package components

import com.ccfraser.muirwik.components.*
import com.ccfraser.muirwik.components.button.mIconButton
import react.RBuilder

fun RBuilder.renderAppBar() {
    mAppBar(position = MAppBarPosition.static) {
        mToolbar(variant = ToolbarVariant.dense, disableGutters = true) {
            mIconButton("menu", color = MColor.inherit)
            mToolbarTitle("Toolbar dense and no gutters")
            mIconButton ("account_circle", color = MColor.inherit )
        }
    }
}