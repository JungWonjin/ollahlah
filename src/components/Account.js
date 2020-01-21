import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Account() {

    return(
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
        </Switch>
    );

}

export default Account;