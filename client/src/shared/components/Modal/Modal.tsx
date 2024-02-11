import ReactDom from 'react-dom';
import { Card } from '../Card';
import styles from './Modal.module.scss';
import React from 'react';
import { IconButton } from '../IconButton';
import { EIcon } from '../Icon';

interface IModalProps {
    isOpen?: boolean;
    close?: () => void;
    children: React.ReactNode;
}

export const Modal = ({ children, close, isOpen = false }: IModalProps) => {
    const container = document.getElementById('modal');

    if (!container) {
        throw new Error(
            'Контейнер для рендеринга модального окна не обнаружен в разметке'
        );
    }

    const onModalPlaygroundHandler = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) close?.();
    };

    return (
        isOpen &&
        ReactDom.createPortal(
            <div className={styles['modal']} onClick={onModalPlaygroundHandler}>
                <Card className={styles['modal__container']}>
                    <div className={styles['modal__head']}>
                        <IconButton
                            src={EIcon.Close}
                            onClick={() => close?.()}
                            round='max'
                        />
                    </div>
                    <div className={styles['modal__body']}>{children}</div>
                </Card>
            </div>,
            container
        )
    );
};
