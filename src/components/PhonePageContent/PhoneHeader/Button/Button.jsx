import React from 'react';
import s from './Button.module.scss';

const Button = () => {
    return (
        <div className={s.button}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
        </div>
    );
};

export default Button;