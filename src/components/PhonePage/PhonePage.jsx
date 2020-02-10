import React from 'react';
import s from './PhonePage.module.scss';

import PhonePageContent from '../PhonePageContent/PhonePageContent';

const PhonePage = () => {
    return (
        <div className={s.container}>
            <div className={s.bg}></div>
            <div className={s.phone}>
                <div className={s.canvas}>
                    <PhonePageContent />
                </div>
            </div>
        </div>
    );
};

export default PhonePage;