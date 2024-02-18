import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISettingsSchema } from '../types/schema/settings.schema';
import { TModel } from '../types/types/model.type';

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
        },
    });
