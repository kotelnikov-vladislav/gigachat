import { HOST } from '@/shared/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthResponse } from '../types/interfaces/auth.service';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${HOST}:8000`,
        credentials: 'include',
    }),
    endpoints: ({ query }) => ({
        getPing: query<IAuthResponse, null>({
            query: () => ({
                url: '/ping',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetPingQuery } = authApi;
