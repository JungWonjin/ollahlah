import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


function Login (props) {

    const handleLogout = (e) => {
        axios.get('/api/account/signout')
            .then((res) => {
                if(res.data.success) props.history.push('/');
            });
    };

    const checkUserId = (e) => {
        axios.get('/api/account/check')
            .then((res) => { 
                alert(res.data.userId);
            })
    };

    const goModify = () => {
        props.history.push('/modify');
    }

    return (
        <div>
            <Button component={RouterLink} to="/modify" variant="outlined" color="primary">modify</Button>
            
            <Button variant="outlined" color="primary" onClick={checkUserId}>로그인확인</Button>
            <Button variant="outlined" color="default" onClick={handleLogout}>logout</Button>
        </div>
    );
}

export default Login;