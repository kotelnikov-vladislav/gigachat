import cn from 'classnames';
import styles from './Message.module.scss';
import { EIcon, Icon } from '../Icon';

interface IMessageProps {
    avatar: EIcon;
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
