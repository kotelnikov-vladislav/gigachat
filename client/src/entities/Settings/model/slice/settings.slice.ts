import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISettingsSchema } from '../types/schema/settings.schema';
import { TModel } from '../types/types/model.type';
import { settingsEndpoint } from '../..';

const initialState: ISettingsSchema = {
    model: 'gigaChat',
    prompt: '',
};

export const { reducer: SettingsReducer, actions: SettingsActions } =
    createSlice({
        name: 'settings',
        initialState,
        reducers: {
            setModel: (state, action: PayloadAction<TModel>) => {
                state.model = action.payload;
            },
            setPrompt: (state, action: PayloadAction<string>) => {
                state.prompt = action.payload;
            },
        },
        extraReducers: (builder) => {
            builder.addMatcher(
                settingsEndpoint.getParams.matchFulfilled,
                (state, action) => {
                    state.prompt = action.payload.prompt;
                }
            );
        },
    });
