import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "@app/repository/NotificationRepository";
import { PrismaService } from "../PrismaService";
import { PrismaNotificationMapper } from "../mapper/PrismaNotificationMapper";

export class PrismaNotificationRepository implements NotificationRepository {

    constructor(private prismaService: PrismaService) {}

    async list(): Promise<any[]> {
        const result = await this.prismaService.notification.findMany();
        return result;
    }

    async create(notification: Notification): Promise<void> {
        const mapedNotification = PrismaNotificationMapper.Map(notification);

        await this.prismaService.notification.create({
            data: mapedNotification
        });
    };
}