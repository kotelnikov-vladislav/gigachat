import { Message, Panel } from '@/shared';
import styles from './ChatPage.module.scss';

export const ChatPage = () => {
    return (
        <div className={styles['chat-page']}>
            <div className='--dark-theme' id='chat'>
                <div className='chat__conversation-board'>
                    <Message
                        avatar='https://randomuser.me/api/portraits/women/44.jpg'
                        messages={[
                            `Somewhere stored deep, deep in my memory
                        banks is the phrase &quot;It really whips
                        the llama's ass&quot;.`,
                        ]}
                    />
                    <Message
                        avatar='https://randomuser.me/api/portraits/men/32.jpg'
                        messages={[
                            `Think the guy that did the voice has a
                        Twitter?`,
                        ]}
                    />
                    <Message
                        avatar='https://randomuser.me/api/portraits/women/44.jpg'
                        messages={['WE MUST FIND HIM!!', 'Wait ...']}
                    />
                    <Message
                        avatar='https://randomuser.me/api/portraits/men/9.jpg'
                        messages={['Winamps still an essential.']}
                        reversed
                    />
                </div>
                <div className='chat__conversation-panel'>
                    <Panel />
                </div>
            </div>
        </div>
    );
};
