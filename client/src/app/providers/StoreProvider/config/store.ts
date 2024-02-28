import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SettingsReducer, settingsApi } from '@/entities/Settings';
import { messageApi } from '@/entities/Message';
import { authApi } from '@/entities/Auth';

export const rootReducer = combineReducers({
    settings: SettingsReducer,

    [settingsApi.reducerPath]: settingsApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            settingsApi.middleware,
            messageApi.middleware,
            authApi.middleware,
        ]),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
