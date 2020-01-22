import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { render } from '@testing-library/react';
import Login from './components/Login';

function App() {
  
  const [isLogin, setIsLogin] = useState(false);

  return (
      <BrowserRouter>
        <Header />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
  );
}

export default App;
