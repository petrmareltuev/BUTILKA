package services

import model.LoginData
import model.Notification
import rpc.Transport
import kotlin.coroutines.CoroutineContext

actual class NotificationService(coroutineContext: CoroutineContext) {
    private val transport = Transport(coroutineContext)

    actual suspend fun checkNotifications(loginData: LoginData): Notification {
        return transport.post("notifications", Notification.serializer(), JSON.stringify(loginData))
    }
}