import { useEffect, useState } from 'react';
import { IconButton, EIcon, Modal, TextField, Button } from '@/shared';
import styles from './Settings.module.scss';
import { TModel } from '../../model/types';
import {
    SettingsActions,
    useGetParamsQuery,
    useSetPromptMutation,
} from '../..';
import { useAppDispatch, useAppSelector } from '@/app';

const INIT_MODEL: TModel = 'gigaChat';

export const Settings = () => {
    const [newPrompt, setNewPrompt] = useState('');
    const [isChange, setIsChange] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const dispatch = useAppDispatch();
    const { model } = useAppSelector((state) => state.settings);

    const { data: { prompt } = { prompt: '' } } = useGetParamsQuery({});
    const [fetchNewPrompt] = useSetPromptMutation();

    const onSubmitHandler = async () => {
        const { status } = await fetchNewPrompt({ prompt: newPrompt }).unwrap();

        if (status) {
            setIsChange(false);
            setIsOpenModal(false);
        }
    };

    const onSelectModel = (model: TModel) =>
        dispatch(SettingsActions.setModel(model));

    useEffect(() => {
        setIsChange(model !== INIT_MODEL || prompt !== newPrompt);
    }, [model, newPrompt]);

    useEffect(() => {
        setNewPrompt(prompt);
    }, [prompt]);

    return (
        <div>
            <IconButton
                src={EIcon.Setting}
                round='max'
                onClick={() => setIsOpenModal(true)}
            />

            {isOpenModal && (
                <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                    <div className={styles['modal']}>
                        <div className={styles['modal__settings']}>
                            <div className={styles['modal__select-model']}>
                                <IconButton
                                    size={80}
                                    src={EIcon.GigaChat}
                                    theme='light'
                                    isActive={model === 'gigaChat'}
                                    onClick={() => onSelectModel('gigaChat')}
                                />
                                <IconButton
                                    size={80}
                                    src={EIcon.YandexGPT}
                                    theme='light'
                                    isActive={model === 'yaChat'}
                                    onClick={() => onSelectModel('yaChat')}
                                />
                            </div>
                            <label className={styles['modal__input-promt']}>
                                <h2>Промпт:</h2>
                                <TextField
                                    isfullHeight
                                    onChange={(event) =>
                                        setNewPrompt(
                                            event.currentTarget.value || ''
                                        )
                                    }
                                    value={newPrompt}
                                />
                            </label>
                        </div>
                        <div className={styles['modal__control']}>
                            <Button
                                isDisabled={!isChange}
                                onClick={onSubmitHandler}
                            >
                                Сохранить
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
