import { Content } from '@app/entities/Content';

describe('Notification content', () => {
    it('Should be able to create a notification content', () => {
        const content = new Content('Voceê recebeu uma nova mensagem!');

        expect(content).toBeTruthy();
    })
    
    it('Should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('abc')).toThrow();
    })

    it('Should not be able to create a notification content with more than 5 characters', () => {
        expect(() => new Content('a'.repeat(257))).toThrow();
    })
})