import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';
import { EIcon, Icon } from '../Icon';

interface IIconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    src: EIcon;
    size?: number;
    round?: 'm' | 'max';
    theme?: 'auto' | 'light' | 'dark';
    isActive?: boolean;
}

export const IconButton = ({
    className,
    src,
    size = 40,
    round = 'm',
    theme = 'auto',
    isActive = false,
    ...props
}: IIconButtonProps) => {
    return (
        <div
            className={cn(styles['icon-button'], className, {
                [styles[`icon-button--round-${round}`]]: round,
                [styles[`icon-button--theme-${theme}`]]: theme,
                [styles[`icon-button--active`]]: isActive,
            })}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <button {...props}>
                <Icon src={src} />
            </button>
        </div>
    );
};
