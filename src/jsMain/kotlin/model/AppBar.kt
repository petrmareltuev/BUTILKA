package model

import com.ccfraser.muirwik.components.*
import com.ccfraser.muirwik.components.button.mIconButton
import react.RBuilder

fun RBuilder.renderAppBar() {
    mAppBar(position = MAppBarPosition.static) {
        mToolbar(variant = ToolbarVariant.dense, disableGutters = true) {
            mToolbarTitle("BUTILKA")
            mIconButton ("account_circle", color = MColor.inherit )
        }
    }
}