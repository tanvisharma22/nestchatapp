"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
let ChatController = class ChatController {
    constructor() {
        this.responseMap = {
            'Hello! I am your AI assistant! How may I help you?': ['hello', 'hi', 'hey'],
            'Bye, Have a nice day!': ['bye', 'goodbye'],
            'I am fine, thank you!': ['how are you', 'how are you doing'],
        };
    }
    async receiveMessage(body) {
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
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('messages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "receiveMessage", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat')
], ChatController);
//# sourceMappingURL=chat.controller.js.map