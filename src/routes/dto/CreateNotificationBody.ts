import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientID: string;

    @IsNotEmpty()
    @Length(5, 256) // Doc: @Length(min, max)
    content: string;

    @IsNotEmpty()
    category: string;
}
