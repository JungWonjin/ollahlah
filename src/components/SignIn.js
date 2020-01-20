import React from 'react';
import Button from '@material-ui/core/Button';
import SignInput from './SignInput';

const SignIn = (props) => {
    return (
        <form>
            <SignInput/>
            <Button
                type="submit"
                className={props.classes.submit}
                onClick={props.onClose}
                variant="contained" color="primary" fullWidth size="large">로그인</Button>
            <Button onClick={props.changeFunc}>가입하기</Button>
        </form>
    );
};

export default SignIn;