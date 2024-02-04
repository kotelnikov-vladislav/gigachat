import { GigaChatIcon, SendIcon, UserIcon } from '../../assets/icons';

export enum EIcon {
    /* general */
    Send,
    /* avatar */
    GigaChat,
    User,
}

const IconMap: Record<EIcon, string> = {
    [EIcon.Send]: SendIcon,
    [EIcon.GigaChat]: GigaChatIcon,
    [EIcon.User]: UserIcon,
};

interface IIconProps {
    src: EIcon;
    size?: number;
}

export const Icon = ({ src, size = 24 }: IIconProps) => {
    return (
        <img
            src={IconMap[src]}
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    );
};
