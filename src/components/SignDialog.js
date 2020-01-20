import React, {  useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

const myStyle = makeStyles(theme => ({
    submit: {
        margin: theme.spacing(2, 0)
      }
}));

const SignDialog = (props) => {

    const [signClsfc, setSignClsfc] = useState("in");

    const changeSignIn = () => {
        setSignClsfc("in");
    }
    const changeSignUp = () => {
        setSignClsfc("up");
    }
    const classes = myStyle();
    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title" maxWidth="xs">
            <DialogTitle id="form-dialog-title">로그인</DialogTitle>
            <DialogContent>
                    {
                        signClsfc === "in"
                            ? (<SignIn classes={classes} changeFunc={changeSignUp} />)
                            : (<SignUp classes={classes} changeFunc={changeSignIn} />)
                    }
            </DialogContent>
        </Dialog>
    );
}

export default SignDialog;