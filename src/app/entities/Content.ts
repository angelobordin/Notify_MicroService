export class Content {
    private readonly content: string;

    constructor(content: string) {
        const isContentValid = this.validateContentLength(content);
        if (!isContentValid) throw new Error('Error of length in property CONTENT');

        this.content = content;
    }

    get value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean {
        return content.length >= 5 && content.length <= 256;
    }
}
