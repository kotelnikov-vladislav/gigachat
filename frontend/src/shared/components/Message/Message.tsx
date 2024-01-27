import cn from 'classnames';
import styles from './Message.module.scss';

interface IMessageProps {
    avatar: string;
    messages: string[];
    reversed?: boolean;
}

export const Message = ({
    avatar,
    messages,
    reversed = false,
}: IMessageProps) => {
    return (
        <div
            className={cn(styles['message'], {
                [styles['message--reversed']]: reversed,
            })}
        >
            <div className={styles['message__person']}>
                <div className={styles['message__avatar']}>
                    <img src={avatar} />
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
