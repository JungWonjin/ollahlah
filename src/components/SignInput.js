import React from 'react';
import TextField from '@material-ui/core/TextField';

const SignInput = () => {
    
    return(
        <div>
            <TextField
                id="userId"
                label="이메일 주소"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="email"
                autoFocus
            />
            <TextField
                id="password"
                label="비밀번호"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="current-password"
            />
        </div>
    );
};

export default SignInput;