import { randomUUID } from 'crypto';
import { Replace } from '@src/helpers/Replace';
import { Content } from './Content';

export interface INotificationProps {
    recipientID: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: INotificationProps;

    constructor(props: Replace<INotificationProps, { createdAt?: Date}>) {
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get id(): string {
        return this._id;
    }

    public set recipientID(recipientID: string) {
        this.props.recipientID = recipientID;
    }

    public get recipientID(): string {
        return this.props.recipientID;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}
