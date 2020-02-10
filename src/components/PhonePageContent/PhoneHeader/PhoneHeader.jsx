import React from 'react';
import s from './PhoneHeader.module.scss';

import Button from './Button/Button';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';

const PhoneHeader = () => {
    return (
        <div className={s.header}>
            <Button />
            <Logo />
            <Cart />
        </div>
    );
};

export default PhoneHeader;