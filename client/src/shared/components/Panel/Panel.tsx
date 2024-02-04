import cn from 'classnames';
import styles from './Panel.module.scss';
import React, { useState } from 'react';
import { EIcon, Icon } from '../Icon';

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
                <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={cn(styles['panel__input'], styles['panel-item'])}
                    placeholder='Type a message...'
                />
                <button
                    type='submit'
                    className={cn(
                        styles['send-message-button'],
                        styles['add-file-button']
                    )}
                >
                    <Icon src={EIcon.Send} />
                </button>
            </form>
        </div>
    );
};
