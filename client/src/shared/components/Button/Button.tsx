import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isDisabled?: boolean;
}

export const Button = ({
    className,
    children,
    isDisabled = false,
    ...rest
}: IButtonProps) => {
    return (
        <button
            className={cn(styles['button'], className)}
            {...rest}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};
