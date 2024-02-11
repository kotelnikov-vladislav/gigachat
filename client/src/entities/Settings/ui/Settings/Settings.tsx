import { useEffect, useState } from 'react';
import { IconButton, EIcon, Modal, TextField, Button } from '@/shared';
import styles from './Settings.module.scss';

type TModel = 'gigachat' | 'yandexgpt';

const INIT_MODEL: TModel = 'gigachat';
const INIT_PROMT: string = '';

export const Settings = () => {
    const [promt, setPromt] = useState('');
    const [isChange, setIsChange] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectModel, setSelectModel] = useState<TModel>(INIT_MODEL);

    useEffect(() => {
        setIsChange(promt !== INIT_PROMT || selectModel !== INIT_MODEL);
    }, [promt, selectModel]);

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
                                    isActive={selectModel === 'gigachat'}
                                    onClick={() => setSelectModel('gigachat')}
                                />
                                <IconButton
                                    size={80}
                                    src={EIcon.YandexGPT}
                                    theme='light'
                                    isActive={selectModel === 'yandexgpt'}
                                    onClick={() => setSelectModel('yandexgpt')}
                                />
                            </div>
                            <label className={styles['modal__input-promt']}>
                                <h2>Промпт:</h2>
                                <TextField
                                    isfullHeight
                                    onChange={(event) =>
                                        setPromt(event.currentTarget.value)
                                    }
                                >
                                    {promt}
                                </TextField>
                            </label>
                        </div>
                        <div className={styles['modal__control']}>
                            <Button isDisabled={!isChange}>Сохранить</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
