import React from 'react';
import Button from '@material-ui/core/Button';
import SignInput from './SignInput';

const SignUp = (props) => {
    return (
        <form>
            
            <SignInput/>
            <Button type="submit" className={props.classes.submit} onClick={props.onClose} variant="contained" color="primary" fullWidth size="large">가입하기</Button>
            <Button onClick={props.changeFunc}>로그인하러</Button>
        </form>
    );
};

export default SignUp;