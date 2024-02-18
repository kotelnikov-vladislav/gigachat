import cn from 'classnames';
import styles from './Message.module.scss';
import { EIcon, Icon } from '@/shared';
import { TModel } from '@/entities/Settings';

interface IMessageProps {
    type: 'user' | TModel;
    messages: string[];
    reversed?: boolean;
}

export const Message = ({
    type,
    messages,
    reversed = false,
}: IMessageProps) => {
    const avatar =
        type === 'user'
            ? EIcon.User
            : type === 'gigaChat'
              ? EIcon.GigaChat
              : EIcon.YandexGPT;

    return (
        <div
            className={cn(styles['message'], {
                [styles['message--reversed']]: reversed,
            })}
        >
            <div className={styles['message__person']}>
                <div className={styles['message__avatar']}>
                    <Icon src={avatar} size={35} />
                </div>
            </div>
            <div className={styles['message__context']}>
                {messages.map((message) => (
                    <div className={styles['message__text']}>
                        <span>{message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
