import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "@app/repository/NotificationRepository";

export class NotificationRepositoryInMemory implements NotificationRepository {
    public notifications: Notification[] = [];

    async list(): Promise<any[]> {
        return [];
    }

    async create(notification: Notification) {
        this.notifications.push(notification);
    };
}