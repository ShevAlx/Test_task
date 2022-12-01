import React from 'react';
import banner from './img/banner.jpg';
import tick from './img/tick.svg';
import clock from './img/clock.svg';
import thumbs_up from './img/thumbs-up.svg';


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
                    <div className='advantages'>
                        <div className='advantages__block'>
                            <img className='advantages__icon' src={clock}/>
                            <h4 className='advantages__title'>
                                Money as soon as next business day
                            </h4>
                            <p className='advantages__text'>
                                With funds in your account as soon as the next business day*, you can get moving on your big plans
                            </p>
                        </div>
                        <div className='advantages__block'>
                            <img className='advantages__icon' src={thumbs_up}/>
                            <h4 className='advantages__title'>
                                We consider all types of credit history 
                            </h4>
                            <p className='advantages__text'>
                                Just because your credit score may be "not-so-great" doesn't mean you can't get approved.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='request'>
                    <h3 className='request__title'>
                        Checkout faster
                    </h3>
                    <p className='request__text'>
                        Our pre-filled form lets you request a loan faster, so you can get on with your day.
                    </p>
                    <input className='request__input' placeholder="Email Address"></input>
                        <span className='request__trigger'>
                            Start here
                        </span>
                    <button className='request__btn'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;