import { randomUUID } from 'crypto';
import { Content } from "@app/entities/Content";
import { Notification } from "@app/entities/Notification";

describe('Notification', () => {
    it('Should be able to create a notification', () => {
        const notification = new Notification({
            recipientID: randomUUID(),
            content: new Content('Você recebeu umas nova mensagem!'),
            category: 'Teste',
            readAt: null
        })

        expect(notification).toBeTruthy();
    });
})