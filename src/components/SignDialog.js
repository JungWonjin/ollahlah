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
    const [dialogTitle, setDialogTitle] = useState("로그인");

    const changeSignIn = () => {
        setSignClsfc("in");
        setDialogTitle("로그인");
    }
    const changeSignUp = () => {
        setSignClsfc("up");
        setDialogTitle("회원가입");
    }

    const signDialogContent = () => {
        if(signClsfc === "in"){
            return (<SignIn classes={classes} changeFunc={changeSignUp} />);
        }else{
            return (<SignUp classes={classes} changeFunc={changeSignIn} />);
        }
    }
    
    const classes = myStyle();
    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title" maxWidth="xs">
            <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
            <DialogContent>
                    {signDialogContent()}
            </DialogContent>
        </Dialog>
    );
}

export default SignDialog;