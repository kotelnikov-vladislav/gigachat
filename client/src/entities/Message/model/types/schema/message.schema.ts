import { TModel } from '@/entities/Settings';

export interface ISendNewMessageRequest {
    content: string;
    model: TModel;
}

export interface ISendNewMessageResponse {
    content: string;
}
