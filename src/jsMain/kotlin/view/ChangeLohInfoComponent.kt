package view

import io.konform.validation.Valid
import io.konform.validation.Validation
import io.konform.validation.jsonschema.maxLength
import io.konform.validation.jsonschema.minLength
import io.konform.validation.jsonschema.pattern
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.visible
import model.*
import react.*
import react.dom.*
import rpc.StatusCodeException
import services.ChangeLohInfoService
import services.LoginService

fun RBuilder.changeLohInfoComponent( goUser: () -> Unit, scope:CoroutineScope) = child(ChangeLohInfoComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}
enum class IsLohExists {
    LohExists,
    LohDoesntExists
}

external interface ChangeLohInfoProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface ChangeLohInfoPageState : RState{
    var fullName: String
    var passportSerialNumber: String
    var registrationAddress: String
    var issued: String
    var subdivisionCode: String
    var oldPassportSerialNumber: String

    var lohExists: IsLohExists
    var errorMessage: String
}

class ChangeLohInfoComponent : RComponent<ChangeLohInfoProps, ChangeLohInfoPageState>() {

    override fun ChangeLohInfoPageState.init(){
        fullName= ""
        passportSerialNumber = ""
        registrationAddress = ""
        issued = ""
        subdivisionCode = ""
        oldPassportSerialNumber = ""

        lohExists = IsLohExists.LohDoesntExists
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div("") {

            div{
                when (state.lohExists){
                    IsLohExists.LohExists -> div(classes = "reg-input-box"){

                        h1 (classes= "pageTitle"){ +"Лох найден" }
                            p {
                                input(type = InputType.text, name = "Новая Серия и номер паспорта") {
                                    attrs {
                                        placeholder = "Серия и номер паспорта"
                                        onChangeFunction = {
                                            state.passportSerialNumber = it.inputValue
                                            setState{
                                                errorMessage = ""
                                            }
                                        }
                                    }
                                }
                            }
                            p {
                                input(type = InputType.text, name = "fio") {
                                    attrs {
                                        placeholder = "Фамилия Имя Отчество"
                                        onChangeFunction = {
                                            state.fullName = it.inputValue
                                            setState {
                                                errorMessage = ""
                                            }
                                        }
                                    }
                                }
                            }
                            p {
                                input(type = InputType.text, name = "Адрес") {
                                    attrs {
                                        placeholder = "Адрес"
                                        onChangeFunction = {
                                            state.registrationAddress = it.inputValue
                                            setState {
                                                errorMessage = ""
                                            }
                                        }
                                    }
                                }
                            }
                            p{
                                input(type = InputType.text, name = "Выдано") {
                                    attrs {
                                        placeholder = "Выдано"
                                        onChangeFunction = {
                                            state.issued = it.inputValue
                                            setState {
                                                errorMessage = ""
                                            }
                                        }
                                    }
                                }
                            }
                            p {
                                input(type = InputType.text, name = "Код подразделения") {
                                    attrs {
                                        placeholder = "Код подразделения"
                                        onChangeFunction = {
                                            state.subdivisionCode = it.inputValue
                                            setState {
                                                errorMessage = ""
                                            }
                                        }
                                    }
                                }
                            }
                            p{
                                button(classes = "App-buttons") {
                                    span {
                                        +"Изменить данные лоха"
                                    }
                                    attrs {
                                        onClickFunction = {
                                            changelohinfo()
                                        }
                                    }
                                }
                            }
                        }
                    IsLohExists.LohDoesntExists -> div(classes = "reg-input-box") {

                        p {
                            input(type = InputType.text, name = "passport") {
                                attrs {
                                    placeholder = "Серия и номер паспорта"
                                    onChangeFunction = {
                                        state.oldPassportSerialNumber = it.inputValue
                                        setState {
                                            errorMessage = ""
                                        }
                                    }
                                }
                            }
                        }

                        p {
                            button(classes = "App-buttons") {
                                span {
                                    +"Найти лоха"
                                }
                                attrs {
                                    onClickFunction = {
                                        doCheck()
                                    }
                                }
                            }
                        }
                    }
                }
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


            div {
                h1{
                    +state.errorMessage
                }
            }
        }
    }

    private fun doCheck() {
        val changeLohInfoService = ChangeLohInfoService(coroutineContext)

        props.coroutineScope.launch {
            if (changeLohInfoService.checkLoh(state.oldPassportSerialNumber)){
                setState {
                    lohExists = IsLohExists.LohExists
                }
            }
            else{
                setState{
                    errorMessage = "Лох с такими паспортными данными не найден"
                }
            }

        }
    }

    private fun changelohinfo(){

        val loh = Loh(state.fullName, state.passportSerialNumber, state.registrationAddress, state.issued, state.subdivisionCode)

        val validateLoh = Validation<Loh> {

            Loh::fullname {
                minLength(8) hint "ФИО должен состоять как минимум из 8 символов"
                maxLength(50) hint "ФИО не должен превышать 50 символов"
            }

            Loh::passportSerialNumber {
                pattern("\\d{10}") hint "Номер паспорта должен состоять ровно из 10 чисел"
            }
            Loh::registrationAddress {
                minLength(1) hint "Поле \"Адрес\" является обязательным для заполнения"
            }
            Loh::issued {
                minLength(1) hint "Поле \"Выдано\" является обязательным для заполнения"
            }
            Loh::subdivisionCode {
                minLength(1) hint "Поле \"Код подразделения\" является обязательным для заполнения"
            }

        }
        val validationResult = validateLoh(loh)


        if(Valid(loh) == validationResult){
            val changeLohInfoService = ChangeLohInfoService(coroutineContext)
            props.coroutineScope.launch {

                if (changeLohInfoService.changeLohInfo(LohUpdate(loh, state.oldPassportSerialNumber))) {
                    setState {
                        errorMessage = "Информация изменена"
                        lohExists = IsLohExists.LohDoesntExists
                    }
                } else {
                    setState {
                        errorMessage = "Ошибка"
                    }
                }
            }
        }
        else
        {
            setState{
                errorMessage=validationResult.errors.first().message
            }
        }

    }

}

