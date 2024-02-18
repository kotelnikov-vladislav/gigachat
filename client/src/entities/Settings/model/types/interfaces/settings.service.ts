/* set-prompt */
export interface ISetPromptRequest {
    prompt: string;
}

export interface ISetPromptResponse {
    status: boolean;
}

export interface IGetParamsRequest {}

export interface IGetParamsResponse {
    prompt: string;
}
