import React, { useContext } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import SignInfoContext from '../Store/SignInfoContext';


function Login (props) {

    const { setIsSignIn } = useContext(SignInfoContext);

    const handleLogout = (e) => {
        axios.get('/api/account/signout')
            .then((res) => {
                if(res.data.success){
                    window.sessionStorage.clear();
                    setIsSignIn(false);
                    props.history.push('/');
                }
            });
    };

    const checkUserId = (e) => {
        axios.get('/api/account/check')
            .then((res) => { 
                alert(res.data.userId);
            })
    };

    return (
        <div>
            <Button component={RouterLink} to="/modify" variant="outlined" color="primary">modify</Button>
            
            <Button variant="outlined" color="primary" onClick={checkUserId}>로그인확인</Button>
            <Button variant="outlined" color="default" onClick={handleLogout}>logout</Button>
        </div>
    );
}

export default Login;