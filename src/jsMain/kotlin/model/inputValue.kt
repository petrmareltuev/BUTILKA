package model

import org.w3c.dom.*
import org.w3c.dom.events.*

internal val Event.inputValue: String
    get() = (target as? HTMLInputElement)?.value ?: (target as? HTMLTextAreaElement)?.value ?: ""

internal val Event.inputBoolean: Boolean
    get() = (target as HTMLInputElement).checked
