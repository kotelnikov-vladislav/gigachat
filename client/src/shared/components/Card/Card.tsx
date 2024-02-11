import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface ICardProps extends React.HTMLAttributes<HTMLElement> {}

export const Card = ({ children, className, ...props }: ICardProps) => {
    return (
        <div className={cn(styles['card'], className)} {...props}>
            {children}
        </div>
    );
};
