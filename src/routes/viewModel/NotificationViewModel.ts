import { Notification } from "@app/entities/Notification";

export class NotificationViewModel {
    static Map(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientID: notification.recipientID,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }
    }
}