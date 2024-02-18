import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SettingsReducer, settingsApi } from '@/entities/Settings';
import { messageApi } from '@/entities/Message';

export const rootReducer = combineReducers({
    settings: SettingsReducer,

    [settingsApi.reducerPath]: settingsApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            settingsApi.middleware,
            messageApi.middleware,
        ]),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
