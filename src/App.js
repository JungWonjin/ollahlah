import React from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Modify from './components/Modify';

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/modify" component={Modify} />
      </BrowserRouter>
  );
}

export default App;
