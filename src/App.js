import React from 'react';
import PhonePage from './components/PhonePage/PhonePage';
// import logo from './logo.svg';
import s from './App.module.scss';

const App = () => {
    return (
        <div className={s.app}>
            <PhonePage />
        </div>
    );
}

export default App;
