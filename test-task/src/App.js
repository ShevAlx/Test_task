import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Welcome from './welcome';

const App = () => {
  return (
    <div>
      <Welcome />
      <Header />
      <Main />
    </div>  
  ); 
}

export default App;
