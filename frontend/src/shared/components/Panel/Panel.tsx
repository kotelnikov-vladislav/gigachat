import cn from 'classnames';
import styles from './Panel.module.scss';

export const Panel = () => {
    return (
        <div className={styles['panel']}>
            <div className={styles['panel__container']}>
                <button className={cn(styles['add-file-button'])}>
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
                    className={cn(styles['panel__input'], styles['panel-item'])}
                    placeholder='Type a message...'
                />
                <button className={cn(styles['send-message-button'])}>
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
            </div>
        </div>
    );
};
