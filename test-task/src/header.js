import React from 'react';
import logo from './img/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img className='header__logo' src={logo} />
                <div className='header__navigation'>
                    <a href='#' className='header__btn'>How It Works</a>
                    <a href='#' className='header__btn'>FAQs</a>
                    <a href='#' className='header__btn'>Log In</a>
                </div>
            </div>
        </header>
    );
}

export default Header;