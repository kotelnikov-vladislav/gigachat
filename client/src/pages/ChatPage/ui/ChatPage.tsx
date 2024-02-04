import { Message, Panel } from '@/shared';
import styles from './ChatPage.module.scss';
import { useState } from 'react';

const AVATAR_URL = {
    user: 'https://clck.ru/38M4NZ',
    gigachat: 'https://clck.ru/38M4G6',
};

interface IHistory {
    author: 'user' | 'gigachat';
    message: string;
}

export const ChatPage = () => {
    const [history, setHistory] = useState<IHistory[]>([]);

    const getAnswerForGigaChat = async (message: string) => {
        const response = await fetch(
            `http://${import.meta.env.VITE_HOST || 'localhost'}:8000/new-msg`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ msg: message }),
            }
        );
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

        getAnswerForGigaChat(msg);
    };

    return (
        <div className={styles['chat-page']}>
            <div className='--dark-theme' id='chat'>
                <div className='chat__conversation-board'>
                    {history.map(({ author, message }, i) => (
                        <Message
                            key={i}
                            avatar={AVATAR_URL[author]}
                            messages={[message]}
                            reversed={author == 'user'}
                        />
                    ))}
                </div>
                <div className='chat__conversation-panel'>
                    <Panel onInputMessageHandler={onInpuntMessage} />
                </div>
            </div>
        </div>
    );
};
