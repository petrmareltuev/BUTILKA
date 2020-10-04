package rpc

import kotlinx.coroutines.await
import kotlinx.coroutines.withContext
import kotlinx.serialization.KSerializer
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json
import org.w3c.fetch.RequestInit
import kotlin.browser.window
import kotlin.coroutines.CoroutineContext
import kotlin.js.json

@JsName("encodeURIComponent")
external fun urlEncode(value: String): String

@JsName("decodeURIComponent")
external fun urlDecode(encoded: String): String

@OptIn(UnstableDefault::class)
class Transport(private val coroutineContext: CoroutineContext) {

    internal suspend fun <T> get(url: String, deserializationStrategy: KSerializer<T>): T {
        return Json.parse(deserializationStrategy, fetch(url,"GET", ""))
    }


    internal suspend fun <T> post(url: String, deserializationStrategy: KSerializer<T>, body: String): T {
        return Json.parse(deserializationStrategy,fetch(url, "POST", body))
    }

    private suspend fun fetch(ur: String,method: String, body: String): String {
        val url = "/$ur"

        return withContext(coroutineContext) {
            val response = window.fetch(url, RequestInit(method,
                headers = json(
                    "Accept" to "application/json",
                    "Content-Type" to "application/json; charset=utf-8"),
                credentials = "same-origin".asDynamic(),
                body = body)).await()

            if (!response.status.equals(200)){
                throw StatusCodeException(response.status)
            }
            response.text().await()

        }
    }
}

