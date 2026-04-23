import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EpicAiApi implements ICredentialType {
	name = 'epicAiApi';
	displayName = 'Epic AI API';
	documentationUrl = 'https://api.chatcaptain.com/api';
	properties: INodeProperties[] = [
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

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-chatcaptain-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.chatcaptain.com',
			url: '/v1/public-apps',
			method: 'GET',
		},
	};
}
