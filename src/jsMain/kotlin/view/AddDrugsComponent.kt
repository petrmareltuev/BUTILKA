package view


import io.konform.validation.Valid
import io.konform.validation.Validation
import io.konform.validation.jsonschema.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import model.inputValue
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import model.Drug
import react.*
import react.dom.*
import services.AddDrugsService

fun RBuilder.addDrugsComponent(goUser: () -> Unit, scope: CoroutineScope) = child(AddDrugsComponent::class) {
    attrs.goUser = goUser
    attrs.coroutineScope = scope
}

external interface AddDrugsProps: RProps {
    var goUser: () -> Unit
    var coroutineScope: CoroutineScope
}

interface AddDrugsPageState: RState{
    var drugType: String
    var drugMass: String

    var errorMessage: String
}

class AddDrugsComponent : RComponent<AddDrugsProps, AddDrugsPageState>() {

    override fun AddDrugsPageState.init() {
        drugType = ""
        drugMass = ""

        errorMessage = ""
    }

    private val coroutineContext
        get() = props.coroutineScope.coroutineContext

    override fun RBuilder.render() {
        div {
            h1 (classes= "pageTitle"){ +"Добавить наркоту" }
        }
            div(classes = "reg-input-box") {
                p {
                    input(type = InputType.text, name = "fio") {
                        attrs {
                            placeholder = "Тип вещества"
                            onChangeFunction = {
                                state.drugType = it.inputValue
                                setState {
                                    errorMessage = ""
                                }
                            }
                        }
                    }
                }
                p {
                    input(type = InputType.text, name = "Серия и номер паспорта") {
                        attrs {
                            placeholder = "Вес"
                            onChangeFunction = {
                                state.drugMass = it.inputValue
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
                            +"Добавить вещество"
                        }
                        attrs {
                            onClickFunction = {
                                addLoh()
                            }
                        }
                    }
                }
                p{
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
        div{
            h1{
                + state.errorMessage
            }
        }
    }

    private fun addLoh() {
        val drug = Drug(state.drugType, state.drugMass)

        val validateDrug = Validation<Drug> {

            Drug::drugType{
                minLength(1) hint "Поле \"Тип вещества\" является обязательным для заполнения"
            }

            Drug::drugMass {
                pattern("\\d+") hint "Вес должен состоять только из чисел чисел"
            }


        }
        val validationResult = validateDrug(drug)


        if(Valid(drug)==validationResult){
            val addDrugsService = AddDrugsService(coroutineContext)
            props.coroutineScope.launch {
                val response = addDrugsService.addDrugs(drug)
                if (response){
                    setState{
                        errorMessage = "Вещество добавлено"
                    }
                }
                else {
                    setState{
                        errorMessage = "Ошибка добавления"
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
