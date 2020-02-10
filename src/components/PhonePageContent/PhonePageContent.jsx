import React from 'react';
import s from './PhonePageContent.module.scss';

import PhoneHeader from './PhoneHeader/PhoneHeader';
import PhoneContent from './PhoneContent/PhoneContent';
import PhoneFooter from './PhoneFooter/PhoneFooter';

const PhonePageContent = () => {
    return (
        <div className={s.pageContent}>
            <div className={s.header}>
                <PhoneHeader/>
            </div>
            <div className={s.content}>
                <PhoneContent/>
            </div>
            <div className="footer">
                <PhoneFooter/>
            </div>
        </div>
    );
};

export default PhonePageContent;