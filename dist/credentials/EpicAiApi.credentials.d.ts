import type { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class EpicAiApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: {
        type: "generic";
        properties: {
            headers: {
                'x-chatcaptain-key': string;
            };
        };
    };
    test: {
        request: {
            baseURL: string;
            url: string;
            method: "GET";
        };
    };
}
//# sourceMappingURL=EpicAiApi.credentials.d.ts.map