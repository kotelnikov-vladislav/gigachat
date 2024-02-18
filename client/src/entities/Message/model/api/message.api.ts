import { HOST } from '@/shared/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISendNewMessageResponse, ISendNewMessageRequest } from '../types';

export const messageApi = createApi({
    reducerPath: 'message',
    baseQuery: fetchBaseQuery({
        baseUrl: `${HOST}:8000`,
    }),
    endpoints: ({ mutation }) => ({
        sendMessage: mutation<ISendNewMessageResponse, ISendNewMessageRequest>({
            query: (msg) => ({
                url: '/new-msg',
                method: 'POST',
                body: msg,
            }),
        }),
    }),
});

export const { useSendMessageMutation } = messageApi;
