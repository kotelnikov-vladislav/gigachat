import {
    EIcon,
    Message,
    Panel,
    Card,
    Modal,
    Icon,
    IconButton,
    TextField,
    Button,
} from '@/shared';
import styles from './ChatPage.module.scss';
import { useState } from 'react';
import { HOST } from '@/shared/constants/api';
import { Settings } from '@/entities';

interface IHistory {
    author: 'user' | 'gigachat';
    message: string;
}

export const ChatPage = () => {
    const [history, setHistory] = useState<IHistory[]>([]);
    const [inputMessageDisabled, setInputMessageDisabled] = useState(false);

    const getAnswerForGigaChat = async (message: string) => {
        const response = await fetch(`${HOST}:8000/new-msg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ msg: message }),
        });
        const { msg } = await response.json();
        setHistory((prevHistory) => {
            return [
                ...prevHistory,
                {
                    author: 'gigachat',
                    message: msg,
                },
            ];
        });
        setInputMessageDisabled(false);
    };

    const onInpuntMessage = (msg: string) => {
        setHistory((prevHistory) => {
            return [
                ...prevHistory,
                {
                    author: 'user',
                    message: msg,
                },
            ];
        });

        setInputMessageDisabled(true);
        getAnswerForGigaChat(msg);
    };

    return (
        <div className={styles['chat-page']}>
            <Card className={styles['chat-page__body']}>
                <div className={styles['chat-page__head']}>
                    <Settings />
                </div>
                <div className={styles['chat-page__conversation-board']}>
                    {history.map(({ author, message }, i) => (
                        <Message
                            key={i}
                            avatar={
                                author === 'user' ? EIcon.User : EIcon.GigaChat
                            }
                            messages={[message]}
                            reversed={author == 'user'}
                        />
                    ))}
                </div>
                <div className='chat__conversation-panel'>
                    <Panel
                        isDisabled={inputMessageDisabled}
                        onInputMessageHandler={onInpuntMessage}
                    />
                </div>
            </Card>
        </div>
    );
};
