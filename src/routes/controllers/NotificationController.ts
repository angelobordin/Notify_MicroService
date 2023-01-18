import { CreateNotificationBody } from '../dto/CreateNotificationBody';
import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { SendNotificationService } from '@app/service/SendNotificationService';
import { NotificationViewModel } from '@routes/viewModel/NotificationViewModel';

@Controller('app')
export class NotificationController {
  constructor(private sendNotificationService: SendNotificationService) {}

  @Get('notification')
  async listNotification() {
    const result = await this.sendNotificationService.list();
    return result;
  }

  @Post('notification')
  async createNotification(@Body() body: CreateNotificationBody) {
    const { category, content, recipientID } = body;

    const { notification } = await this.sendNotificationService.execute({
      recipientID,
      content,
      category
    });

    return { 
      notification: NotificationViewModel.Map(notification)
    }
  }

}
