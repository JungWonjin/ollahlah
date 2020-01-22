import React from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  
  return (
      <BrowserRouter>
        <Header />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
  );
}

export default App;
