import React from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

interface ITextFieldProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    isfullHeight?: boolean;
    value?: string;
}

export const TextField = ({
    className,
    isfullHeight = false,
    children,
    ...props
}: ITextFieldProps) => {
    return (
        <textarea
            className={cn(styles['text-field'], className, {
                [styles['text-field--full-height']]: isfullHeight,
            })}
            {...props}
        />
    );
};
