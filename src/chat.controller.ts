import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus
} from '@nestjs/common';

@Controller('chat')
export class ChatController {
    private responseMap: { [key: string]: string[] } = {
        'Hello! I am your AI assistant! How may I help you?': ['hello', 'hi', 'hey'],
        'Bye, Have a nice day!': ['bye', 'goodbye'],
        'I am fine, thank you!': ['how are you', 'how are you doing'],
       
    };

    @Post('messages')
    async receiveMessage(@Body() body: { sender: string, text: string }): Promise<{ text: string, sender: string }> {
        try {
            const userMessage = body.text.toLowerCase();
            let responseMessage = 'Sorry, I did not understand that.';

            Object.entries(this.responseMap).forEach(([response, triggers]) => {
                triggers.forEach(trigger => {
                    if (userMessage.includes(trigger)) {
                        responseMessage = response;
                    }
                });
            });

            return { text: responseMessage, sender: 'server' };
        } catch (error) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
