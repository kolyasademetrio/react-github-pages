import React from 'react';
import s from './PhoneContent.module.css';

import SliderMain from './../SliderMain/SliderMain';

const PhoneContent = () => {
    return (
        <div className={s.content}>
            <SliderMain />
        </div>
    );
};

export default PhoneContent;