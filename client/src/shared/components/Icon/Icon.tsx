import styles from './Icon.module.scss';
import {
    CloseIcon,
    GigaChatIcon,
    SendIcon,
    SettingIcon,
    UserIcon,
    YandexGPTIcon,
} from '../../assets/icons';

export enum EIcon {
    /* general */
    Send,
    /* avatar */
    GigaChat,
    User,
    YandexGPT,
    /* control */
    Close,
    Setting,
}

const IconMap: Record<EIcon, string> = {
    /* general */
    [EIcon.Send]: SendIcon,
    /* avatar */
    [EIcon.GigaChat]: GigaChatIcon,
    [EIcon.User]: UserIcon,
    [EIcon.YandexGPT]: YandexGPTIcon,
    /* control */
    [EIcon.Close]: CloseIcon,
    [EIcon.Setting]: SettingIcon,
};

interface IIconProps {
    src: EIcon;
    size?: number;
}

export const Icon = ({ src, size }: IIconProps) => {
    const sizeStyle = size ? `${size}px` : '100%';

    return (
        <img
            className={styles['icon']}
            src={IconMap[src]}
            style={{ width: sizeStyle, height: sizeStyle }}
        />
    );
};
