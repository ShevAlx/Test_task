import React from 'react';
import close from './img/close.png';

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='container'>
                <p className='welcome__name'>
                    Welcome Back, John!
                </p>
                <button className='welcome__btn' type='button'>
                    <img src={close} />
                </button>
            </div>
        </div>
    );
}

export default Welcome;