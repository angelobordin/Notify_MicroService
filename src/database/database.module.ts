import { PrismaNotificationRepository } from './prisma/repository/PrismaNotificationRepository';
import { Module } from "@nestjs/common";
import { NotificationRepository } from "@app/repository/NotificationRepository";
import { PrismaService } from "./prisma/PrismaService";

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationRepository
        }
    ],
})
export class DataBaseModule {}