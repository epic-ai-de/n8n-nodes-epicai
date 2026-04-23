"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpicAi = void 0;
const CONVERSATION_CREATE_DEFAULT = JSON.stringify({
    conversation: {
        contactId: "contact_abc123",
        channelId: "channel_def456",
        channelType: "web",
        name: "John Doe",
        environment: "test",
        language: "DE"
    }
}, null, 2);
const CONVERSATION_UPDATE_DEFAULT = JSON.stringify({
    conversation: {}
}, null, 2);
const CONVERSATION_TRIGGER_EVENT_DEFAULT = JSON.stringify({
    event: "custom_event_name"
}, null, 2);
const CONVERSATION_SEND_MESSAGE_AS_USER_DEFAULT = JSON.stringify({
    disableSending: false,
    message: {
        content: {
            text: "Hello, how can I help you?"
        },
        sender: "agent",
        type: "text",
        status: "sent",
        created: "2026-04-14T09:00:00Z",
        outgoing: true
    }
}, null, 2);
const CONVERSATION_SEND_MESSAGE_AS_AGENT_DEFAULT = JSON.stringify({
    text: "Hello, I have a question."
}, null, 2);
const CONVERSATION_VARIABLE_CREATE_DEFAULT = JSON.stringify({
    category: "custom",
    defaultValue: "Default Value",
    label: "Customer Email",
    type: "string",
    name: "customer_email",
    structureJson: "{\"firstName\": \"string\", \"lastName\": \"string\"}"
}, null, 2);
const CONVERSATION_VARIABLE_UPDATE_DEFAULT = JSON.stringify({
    value: ""
}, null, 2);
const CONVERSATION_NOTE_ADD_DEFAULT = JSON.stringify({
    notes: [
        "Customer requested callback",
        "Issue escalated to supervisor"
    ]
}, null, 2);
const CONVERSATION_NOTE_REMOVE_DEFAULT = JSON.stringify({
    notes: [
        "Resolved",
        "Duplicate inquiry"
    ]
}, null, 2);
const CONVERSATION_CONTACT_CREATE_DEFAULT = JSON.stringify({
    name: "Max Example",
    language: "EN",
    email: "max.mustermann@example.com",
    phoneNumber: "+4917612345678",
    whatsappId: "49123456789",
    webId: "web_abc123xyz",
    instagramId: "17841400123456789",
    facebookId: "10158123456789012",
    telegramId: "123456789",
    providerId: "provider_abc123",
    avatar: "https://example.com/avatar.png"
}, null, 2);
const CONVERSATION_CONTACT_UPDATE_DEFAULT = JSON.stringify({
    contact: {
        name: "Maximilian Example",
        email: "maximilian.mustermann@example.com",
        address: {
            street: "Example Street",
            country: "Germany",
            zipcode: "12345",
            houseNumber: "1a",
            location: "Berlin"
        },
        phoneNumber: "+4917612345678",
        variables: {
            customer_id: "12345"
        },
        organizationIds: [
            "uq8BxZaJd2wZR9cxd1P"
        ],
        avatar: "https://example.com/avatar.png",
        language: "EN"
    }
}, null, 2);
class EpicAi {
    constructor() {
        this.description = {
            displayName: 'Epic AI',
            name: 'epicAi',
            icon: 'file:epic-ai-favicon-black-256.png',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Epic AI (ChatCaptain) API',
            defaults: {
                name: 'Epic AI',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'epicAiApi',
                    required: true,
                },
            ],
            properties: [
                // ─── RESOURCE ───────────────────────────────────────────────
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        { name: 'Contact', value: 'contact' },
                        { name: 'Conversation', value: 'conversation' },
                        { name: 'Variable', value: 'variable' },
                    ],
                    default: 'conversation',
                },
                // ─── OPERATIONS ──────────────────────────────────────────────
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['conversation'] } },
                    options: [
                        { name: 'Create Conversation', value: 'createConversation', action: 'Create a conversation' },
                        { name: 'Create Note', value: 'addNote', action: 'Create a note in a conversation' },
                        { name: 'Delete Note', value: 'removeNote', action: 'Delete a note from a conversation' },
                        { name: 'Get All Conversations', value: 'getAllConversations', action: 'Get all conversations' },
                        { name: 'Get All Messages', value: 'getAllMessages', action: 'Get all messages of a conversation' },
                        { name: 'Get All Variables', value: 'getAllVariables', action: 'Get all variables of a conversation' },
                        { name: 'Get Conversation', value: 'getConversation', action: 'Get a conversation' },
                        { name: 'Get Message', value: 'getMessage', action: 'Get a message' },
                        { name: 'Get Variable', value: 'getVariable', action: 'Get a specific variable' },
                        { name: 'Send Message as Agent', value: 'sendMessageAsAgent', action: 'Send a message as agent' },
                        { name: 'Send Message as User', value: 'sendMessageAsUser', action: 'Send a message as user' },
                        { name: 'Set / Update Variable', value: 'updateVariable', action: 'Set or update a specific variable' },
                        { name: 'Trigger Custom Event', value: 'triggerEvent', action: 'Trigger a custom event in a conversation' },
                        { name: 'Update Conversation', value: 'updateConversation', action: 'Update a conversation' },
                    ],
                    default: 'getAllConversations',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['contact'] } },
                    options: [
                        { name: 'Create Contact', value: 'createContact', action: 'Create a contact' },
                        { name: 'Delete Contact', value: 'deleteContact', action: 'Delete a contact' },
                        { name: 'Get All Contacts', value: 'getAllContacts', action: 'Get all contacts' },
                        { name: 'Get Contact', value: 'getContact', action: 'Get a contact' },
                        { name: 'Update Contact', value: 'updateContact', action: 'Update a contact' },
                    ],
                    default: 'getAllContacts',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['variable'] } },
                    options: [
                        { name: 'Create Global Variable', value: 'createVariable', action: 'Create a new global variable' },
                        { name: 'Delete Global Variable', value: 'deleteVariable', action: 'Delete a global variable' },
                    ],
                    default: 'createVariable',
                },
                // ─── SHARED PARAMETERS ───────────────────────────────────────
                {
                    displayName: 'Chatbot ID',
                    name: 'chatbotId',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'The ID of the chatbot',
                },
                {
                    displayName: 'Conversation ID',
                    name: 'conversationId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['conversation'],
                            operation: [
                                'getConversation', 'updateConversation', 'triggerEvent',
                                'getAllMessages', 'getMessage', 'sendMessageAsUser', 'sendMessageAsAgent',
                                'getAllVariables', 'getVariable', 'updateVariable',
                                'addNote', 'removeNote',
                            ],
                        },
                    },
                    description: 'The ID of the conversation',
                },
                {
                    displayName: 'Message ID',
                    name: 'messageId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['conversation'],
                            operation: ['getMessage'],
                        },
                    },
                    description: 'The ID of the message',
                },
                {
                    displayName: 'Variable ID',
                    name: 'variableId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['conversation', 'variable'],
                            operation: ['getVariable', 'updateVariable', 'deleteVariable'],
                        },
                    },
                    description: 'The ID of the variable',
                },
                {
                    displayName: 'Contact ID',
                    name: 'contactId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['getContact', 'updateContact', 'deleteContact'],
                        },
                    },
                    description: 'The ID of the contact',
                },
                // ─── BODY FIELDS ─────────────────────────────────────────────
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyConversationCreate',
                    type: 'json',
                    default: CONVERSATION_CREATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['createConversation'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyConversationUpdate',
                    type: 'json',
                    default: CONVERSATION_UPDATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['updateConversation'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyTriggerEvent',
                    type: 'json',
                    default: CONVERSATION_TRIGGER_EVENT_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['triggerEvent'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodySendMessageAsUser',
                    type: 'json',
                    default: CONVERSATION_SEND_MESSAGE_AS_USER_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['sendMessageAsUser'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodySendMessageAsAgent',
                    type: 'json',
                    default: CONVERSATION_SEND_MESSAGE_AS_AGENT_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['sendMessageAsAgent'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyVariableCreate',
                    type: 'json',
                    default: CONVERSATION_VARIABLE_CREATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['variable'], operation: ['createVariable'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyVariableUpdate',
                    type: 'json',
                    default: CONVERSATION_VARIABLE_UPDATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['updateVariable'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyNoteAdd',
                    type: 'json',
                    default: CONVERSATION_NOTE_ADD_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['addNote'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyNoteRemove',
                    type: 'json',
                    default: CONVERSATION_NOTE_REMOVE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['conversation'], operation: ['removeNote'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyContactCreate',
                    type: 'json',
                    default: CONVERSATION_CONTACT_CREATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['contact'], operation: ['createContact'] },
                    },
                    description: 'The request body as JSON',
                },
                {
                    displayName: 'Body (JSON)',
                    name: 'bodyContactUpdate',
                    type: 'json',
                    default: CONVERSATION_CONTACT_UPDATE_DEFAULT,
                    displayOptions: {
                        show: { resource: ['contact'], operation: ['updateContact'] },
                    },
                    description: 'The request body as JSON',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('epicAiApi');
        const apiKey = credentials.apiKey;
        const baseUrl = 'https://api.chatcaptain.com';
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i);
            const operation = this.getNodeParameter('operation', i);
            const chatbotId = this.getNodeParameter('chatbotId', i);
            let url = '';
            let method = 'GET';
            let body = undefined;
            // Body holen
            const bodyParamMap = {
                createConversation: 'bodyConversationCreate',
                updateConversation: 'bodyConversationUpdate',
                triggerEvent: 'bodyTriggerEvent',
                sendMessageAsUser: 'bodySendMessageAsUser',
                sendMessageAsAgent: 'bodySendMessageAsAgent',
                createVariable: 'bodyVariableCreate',
                updateVariable: 'bodyVariableUpdate',
                addNote: 'bodyNoteAdd',
                removeNote: 'bodyNoteRemove',
                createContact: 'bodyContactCreate',
                updateContact: 'bodyContactUpdate',
            };
            const bodyParamName = bodyParamMap[operation];
            if (bodyParamName) {
                try {
                    const bodyParam = this.getNodeParameter(bodyParamName, i, '{}');
                    body = JSON.parse(bodyParam);
                }
                catch { /* ignore invalid JSON */ }
            }
            // ─── CONVERSATION ────────────────────────────────────────────
            if (resource === 'conversation') {
                // Conversations
                if (operation === 'getAllConversations') {
                    url = `/v1/chatbots/${chatbotId}/conversations`;
                    method = 'GET';
                }
                if (operation === 'getConversation') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}`;
                    method = 'GET';
                }
                if (operation === 'createConversation') {
                    url = `/v1/chatbots/${chatbotId}/conversations`;
                    method = 'POST';
                }
                if (operation === 'updateConversation') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}`;
                    method = 'PATCH';
                }
                if (operation === 'triggerEvent') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/custom-event`;
                    method = 'POST';
                }
                // Messages
                if (operation === 'getAllMessages') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/messages`;
                    method = 'GET';
                }
                if (operation === 'getMessage') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    const messageId = this.getNodeParameter('messageId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/messages/${messageId}`;
                    method = 'GET';
                }
                if (operation === 'sendMessageAsUser') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/messages`;
                    method = 'POST';
                }
                if (operation === 'sendMessageAsAgent') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    body = { conversationId, ...(body !== null && body !== void 0 ? body : {}) };
                    url = `/v1/inbox/${chatbotId}/messages`;
                    method = 'POST';
                }
                // Notes
                if (operation === 'addNote') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/notes`;
                    method = 'PATCH';
                }
                if (operation === 'removeNote') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/notes`;
                    method = 'DELETE';
                }
                // Variables
                if (operation === 'getAllVariables') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/variables`;
                    method = 'GET';
                }
                if (operation === 'getVariable') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    const variableId = this.getNodeParameter('variableId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/variables/${variableId}`;
                    method = 'GET';
                }
                if (operation === 'updateVariable') {
                    const conversationId = this.getNodeParameter('conversationId', i);
                    const variableId = this.getNodeParameter('variableId', i);
                    url = `/v1/chatbots/${chatbotId}/conversations/${conversationId}/variables/${variableId}`;
                    method = 'PUT';
                }
            }
            // ─── CONTACT ─────────────────────────────────────────────────
            if (resource === 'contact') {
                if (operation === 'getAllContacts') {
                    url = `/v1/chatbots/${chatbotId}/contacts`;
                    method = 'GET';
                }
                if (operation === 'getContact') {
                    const contactId = this.getNodeParameter('contactId', i);
                    url = `/v1/chatbots/${chatbotId}/contacts/${contactId}`;
                    method = 'GET';
                }
                if (operation === 'createContact') {
                    url = `/v1/chatbots/${chatbotId}/contacts`;
                    method = 'POST';
                }
                if (operation === 'updateContact') {
                    const contactId = this.getNodeParameter('contactId', i);
                    url = `/v1/chatbots/${chatbotId}/contacts/${contactId}`;
                    method = 'PATCH';
                }
                if (operation === 'deleteContact') {
                    const contactId = this.getNodeParameter('contactId', i);
                    url = `/v1/chatbots/${chatbotId}/contacts/${contactId}`;
                    method = 'DELETE';
                }
            }
            // ─── VARIABLES ───────────────────────────────────────────────
            if (resource === 'variable') {
                if (operation === 'createVariable') {
                    url = `/v1/chatbots/${chatbotId}/variables`;
                    method = 'POST';
                }
                if (operation === 'deleteVariable') {
                    const variableId = this.getNodeParameter('variableId', i);
                    url = `/v1/chatbots/${chatbotId}/variables/${variableId}`;
                    method = 'DELETE';
                }
            }
            // ─── HTTP REQUEST ────────────────────────────────────────────
            const options = {
                method,
                url: `${baseUrl}${url}`,
                headers: {
                    'Content-Type': 'application/json',
                    'x-chatcaptain-key': apiKey,
                },
                returnFullResponse: false,
                ignoreHttpStatusErrors: true,
            };
            if (body && Object.keys(body).length > 0 && ['POST', 'PATCH', 'PUT', 'DELETE'].includes(method)) {
                options.body = JSON.stringify(body);
            }
            let result = {};
            try {
                const response = await this.helpers.httpRequest(options);
                if (response === null || response === undefined) {
                    result = { success: true };
                }
                else if (typeof response === 'string') {
                    result = response.length > 0 ? JSON.parse(response) : { success: true };
                }
                else if (typeof response === 'object') {
                    result = JSON.parse(JSON.stringify(response));
                }
            }
            catch (error) {
                const err = error;
                if (err.message && (err.message.includes('circular') || err.message.includes('500') || err.message.includes('Converting'))) {
                    result = { success: true };
                }
                else {
                    throw error;
                }
            }
            returnData.push({ json: result });
        }
        return [returnData];
    }
}
exports.EpicAi = EpicAi;
//# sourceMappingURL=EpicAi.node.js.map