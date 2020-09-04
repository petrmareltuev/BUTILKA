import org.w3c.xhr.XMLHttpRequest

private const val serverURL = "http://0.0.0.0:8080"

internal fun httpGET(url: String, callback: (String) -> Unit) {
    val param1 = "Petr"
    val params = "login=$param1"
    val urlRequest = "$serverURL$url?$params"
    console.log(params)

    val xmlHttp = XMLHttpRequest()
    xmlHttp.open("GET", urlRequest)
    xmlHttp.onload = {
        if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
            callback.invoke(xmlHttp.responseText)
        }
        else{
            console.log(xmlHttp.readyState.toString() + "  " + xmlHttp.status)
        }
    }
    xmlHttp.send()
}

internal fun httpPOST(url: String, body:String, callback: (String) -> Unit) {
    //TODO check body
    //TODO create session or send username and password
    val xmlHttp = XMLHttpRequest()
    xmlHttp.open("POST", serverURL +url,true)

    xmlHttp.setRequestHeader("Accept", "*/*")
    xmlHttp.setRequestHeader("Accept-Language", "en-US,en;q=0.5")
    xmlHttp.setRequestHeader("Content-Type", "application/json")
    //text/plain;charset=UTF-8

    xmlHttp.onload = {

        if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
            callback.invoke(xmlHttp.responseText)
        }
        else{
            console.log(xmlHttp.readyState.toString() + "  " + xmlHttp.status)
        }
    }
    xmlHttp.send(body)

}