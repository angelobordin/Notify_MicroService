import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { NotificationRepository } from "../repository/NotificationRepository";

interface ISendNotificationRequest {
    recipientID: string,
    content: string,
    category: string
}

interface ISendNotificationResponse {
    notification: Notification
}

export class SendNotificationService {
    constructor(private notificationRepository: NotificationRepository) {}

    async list(): Promise<any[]> {
        const result = await this.notificationRepository.list();
        return result;
    }

    async execute(request: ISendNotificationRequest): Promise<ISendNotificationResponse> {
        const { recipientID, content, category } = request;
        
        const notification = new Notification({
            recipientID,
            content: new Content(content),
            category
        });

        await this.notificationRepository.create(notification);

        return {
            notification
        };
    }
}