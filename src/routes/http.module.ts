import { Module } from "@nestjs/common";
import { SendNotificationService } from '@app/service/SendNotificationService';
import { NotificationController } from "./controllers/NotificationController";
import { NotificationRepository } from '@app/repository/NotificationRepository';
import { PrismaNotificationRepository } from '@database/prisma/repository/PrismaNotificationRepository';

@Module({
    imports: [],
    controllers: [NotificationController],
    providers: [
        SendNotificationService,
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationRepository
        }
    ]
})
export class HttpModule {}