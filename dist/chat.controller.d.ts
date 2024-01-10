export declare class ChatController {
    private responseMap;
    receiveMessage(body: {
        sender: string;
        text: string;
    }): Promise<{
        text: string;
        sender: string;
    }>;
}
