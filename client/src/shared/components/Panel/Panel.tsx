import cn from 'classnames';
import styles from './Panel.module.scss';
import React, { useState } from 'react';

interface IPanelProps {
    onInputMessageHandler?: (msg: string) => void;
}

export const Panel = ({ onInputMessageHandler }: IPanelProps) => {
    const [message, setMessage] = useState('');

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onInputMessageHandler?.(message);
        setMessage('');
    };

    return (
        <div className={styles['panel']}>
            <form
                onSubmit={onSubmitHandler}
                className={styles['panel__container']}
            >
                <button type='button' className={cn(styles['add-file-button'])}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        aria-hidden='true'
                    >
                        <line x1='12' y1='5' x2='12' y2='19'></line>
                        <line x1='5' y1='12' x2='19' y2='12'></line>
                    </svg>
                </button>
                <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={cn(styles['panel__input'], styles['panel-item'])}
                    placeholder='Type a message...'
                />
                <button
                    type='submit'
                    className={cn(styles['send-message-button'])}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        aria-hidden='true'
                        data-reactid='1036'
                    >
                        <line x1='22' y1='2' x2='11' y2='13'></line>
                        <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                    </svg>
                </button>
            </form>
        </div>
    );
};
