import { EIcon, Panel, Card } from '@/shared';
import styles from './ChatPage.module.scss';
import { useState } from 'react';
import { Settings, TModel } from '@/entities/Settings';
import { Message, useSendMessageMutation } from '@/entities/Message';
import { useAppSelector } from '@/app';

interface IHistory {
    author: 'user' | TModel;
    message: string;
}

export const ChatPage = () => {
    const [history, setHistory] = useState<IHistory[]>([]);
    const [inputMessageDisabled, setInputMessageDisabled] = useState(false);
    const { model } = useAppSelector((state) => state.settings);

    const [fetchSendMsg] = useSendMessageMutation({});

    const onInpuntMessage = async (msg: string) => {
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

        const { content } = await fetchSendMsg({
            content: msg,
            model,
        }).unwrap();

        setHistory((prevHistory) => {
            return [
                ...prevHistory,
                {
                    author: model,
                    message: content,
                },
            ];
        });

        setInputMessageDisabled(false);
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
                            type={author}
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
