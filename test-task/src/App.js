import React from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Welcome from './welcome';

const App = () => {
  return (
    <div>
      <Welcome />
      <Header />
      <Main />
      <Footer />
    </div>  
  ); 
}

export default App;
