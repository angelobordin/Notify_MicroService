import { randomUUID } from 'crypto';
// import { Notification } from 'src/app/entities/Notification';
import { SendNotificationService } from '@app/service/SendNotificationService';
import { NotificationRepositoryInMemory } from './repositoryInMemory/NotificationRepositoryInMemory';

// let notifications: Notification[] = [];

// const notificationRepository = {
//     async create(notification: Notification) {
//         notifications.push(notification);
//     }
// };

describe('Send notification', () => {
    it('Should be able to send a notification', async () => {
        const inMemoryRepository = new NotificationRepositoryInMemory;
        const sendNotification = new SendNotificationService(inMemoryRepository);
      
        await sendNotification.execute({
            recipientID: randomUUID(),
            content: 'Você recebeu um comentário na sua prova',
            category: 'Social'
        });

        expect(inMemoryRepository.notifications).toHaveLength(1);
    })
})