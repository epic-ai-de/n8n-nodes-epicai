"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpicAiApi = void 0;
class EpicAiApi {
    constructor() {
        this.name = 'epicAiApi';
        this.displayName = 'Epic AI API';
        this.documentationUrl = 'https://api.chatcaptain.com/api';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                required: true,
                description: 'The ChatCaptain API key',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-chatcaptain-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.chatcaptain.com',
                url: '/v1/public-apps',
                method: 'GET',
            },
        };
    }
}
exports.EpicAiApi = EpicAiApi;
//# sourceMappingURL=EpicAiApi.credentials.js.map