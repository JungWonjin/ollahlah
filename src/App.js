import React, { useState, useEffect } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInfoContext from './Store/SignInfoContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Modify from './components/Modify';

function App() {

  const [isSignIn, setIsSignIn] = useState(false);
  const signInSate = {isSignIn, setIsSignIn}

  const checkSignIn = () => {
    const id = window.sessionStorage.getItem('id');
    if(id){
      setIsSignIn(true);
    }else{
      setIsSignIn(false);
    }
  };
  useEffect(checkSignIn);

  return (
    <SignInfoContext.Provider value={signInSate}>
      <BrowserRouter>
        <Header />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/modify" component={Modify} />
      </BrowserRouter>
    </SignInfoContext.Provider>
  );
}

export default App;
