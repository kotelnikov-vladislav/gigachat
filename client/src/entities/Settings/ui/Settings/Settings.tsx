import { useEffect, useState } from 'react';
import {
    IconButton,
    EIcon,
    Modal,
    TextField,
    Button,
    useAppDispatch,
    useAppSelector,
} from '@/shared';
import { TModel } from '../../model/types';
import {
    SettingsActions,
    useGetParamsQuery,
    useSetPromptMutation,
} from '../..';
import styles from './Settings.module.scss';

export const Settings = () => {
    const [isChange, setIsChange] = useState(false);
    const [inputPrompt, setInputPrompt] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { data: { prompt } = { prompt: '' } } = useGetParamsQuery({});

    const dispatch = useAppDispatch();
    const { model } = useAppSelector((state) => state.settings);
    const [selectModel, setSelectModel] = useState<TModel>(model);

    const [fetchNewPrompt] = useSetPromptMutation();

    const onSubmitHandler = async () => {
        dispatch(SettingsActions.setModel(selectModel));

        const { status } = await fetchNewPrompt({
            prompt: inputPrompt,
        }).unwrap();

        if (status) {
            setIsChange(false);
            setIsOpenModal(false);
        } else {
            alert('Ой, какие-то проблемы с сервером');
        }
    };

    const onSelectModel = (selectedModel: TModel) => {
        setSelectModel(selectedModel);
    };

    const onChangeNewPrompt = (value: string) => {
        setInputPrompt(value);
    };

    useEffect(() => {
        setIsChange(selectModel !== model || prompt !== inputPrompt);
    }, [selectModel, inputPrompt]);

    useEffect(() => {
        setInputPrompt(prompt);
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
                                    isActive={selectModel === 'gigaChat'}
                                    onClick={() => onSelectModel('gigaChat')}
                                />
                                <IconButton
                                    size={80}
                                    src={EIcon.YandexGPT}
                                    theme='light'
                                    isActive={selectModel === 'yaChat'}
                                    onClick={() => onSelectModel('yaChat')}
                                />
                            </div>
                            <label className={styles['modal__input-promt']}>
                                <h2>Промпт:</h2>
                                <TextField
                                    isfullHeight
                                    onChange={(event) =>
                                        onChangeNewPrompt(
                                            event.currentTarget.value
                                        )
                                    }
                                    value={inputPrompt}
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
