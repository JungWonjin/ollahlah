import React from 'react';
import Header from './Header';
import Account from './components/Account';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
      <BrowserRouter>
        <Header />
        <Account />
      </BrowserRouter>
  );
}

export default App;
