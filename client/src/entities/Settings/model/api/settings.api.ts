import { HOST } from '@/shared/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    IGetParamsRequest,
    IGetParamsResponse,
    ISetPromptRequest,
    ISetPromptResponse,
} from '../types';

export const settingsApi = createApi({
    reducerPath: 'settingsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${HOST}:8000`,
        credentials: 'include',
    }),
    endpoints: ({ query, mutation }) => ({
        setPrompt: mutation<ISetPromptResponse, ISetPromptRequest>({
            query: (prompt) => ({
                url: '/prompt',
                method: 'POST',
                body: prompt,
            }),
        }),
        getParams: query<IGetParamsResponse, IGetParamsRequest>({
            query: () => ({
                url: '/params',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useSetPromptMutation,
    useGetParamsQuery,
    endpoints: settingsEndpoint,
} = settingsApi;
