import React from 'react';
import banner from './img/banner.jpg';
import tick from './img/tick.svg';

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='banner'>
                    <img className='banner__img' src={banner}/>
                    <div className='banner__wrapper'>
                        <h1 className='banner__title'>
                            Time is money, don’t waste it
                        </h1>
                        <div className='d-flex'>
                            <div className='banner__block'>
                                <img className='banner__icon' src={tick}/>
                                <p className='banner__text'>
                                    $200—$10K Personal Loans
                                </p>
                            </div>
                            <div className='banner__block'>
                                <img className='banner__icon' src={tick}/>
                                <p className='banner__text'>
                                    Fast, Easy and Discreet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;