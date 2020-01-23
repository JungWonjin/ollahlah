import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import SignInput from './SignInput';
import SignInfoContext from '../Store/SignInfoContext';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Account(props) {

  const [userInfo, setUserInfo] = useState({userId: '', password: '', userName: ''});
  const { setIsSignIn } = useContext(SignInfoContext);

  const handleChange = (e) => {
    setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value
    });
  };

  const submitSignUp = (e) => {
    e.preventDefault();
    axios.post('/api/account/signup',
            {'user_id': userInfo.userId,
            'password': userInfo.password,
            'user_name': userInfo.userName})
        .then((res) => {
          alert('가입완료');
          props.history.push('/');
        }).catch((err) => {
          alert(err);
        });
  };

  const submitSignIn = (e) => {
    e.preventDefault();
    axios.post('/api/account/signin',
              {'user_id': userInfo.userId,
              'password': userInfo.password})
          .then((res) => {
              window.sessionStorage.setItem('id', res.data.userId);
              window.sessionStorage.setItem('name', res.data.userName)
              setIsSignIn(true);
              props.history.push('/login');
          }).catch((err) => {
            alert(err);
          });
    
  };
  
  const submitModify = (e) => {
    e.preventDefault();
    axios.put('/api/account/modify',
              {'user_name': userInfo.userName,
              'user_id': userInfo.userId,
              'password': userInfo.password})
          .then((res) => {
            window.sessionStorage.setItem('name', res.data.userName);
            props.history.push('/');
          }).catch((err) => {

          });
  };

  const classes = useStyles();

  const signUpView = (
    <form onSubmit={submitSignUp} className={classes.form}>
      <TextField onChange={handleChange}
        autoComplete="fname"
        margin="normal"
        name="userName"
        variant="outlined"
        required
        fullWidth
        id="userName"
        label="Name"
        autoFocus
      />
      <SignInput onChange={handleChange} />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={RouterLink} to="./signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );

  const signInView = (
    <form onSubmit={submitSignIn} className={classes.form}>
      <SignInput onChange={handleChange} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="./signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );

  const modifyView = (
    
    <form onSubmit={submitModify} className={classes.form}>    
      <TextField onChange={handleChange}
        autoComplete="fname"
        margin="normal"
        name="userName"
        variant="outlined"
        required
        fullWidth
        id="userName"
        label="Name"
        autoFocus
        value={window.sessionStorage.getItem('name')}
      />
      <SignInput onChange={handleChange} mode="modify" />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Modify
      </Button>
    </form>    
  );

  const switchView = (mode) => {

    let view = null;
    switch(mode){
      case "signin":
        view = signInView;
      break;
        
      case "signup":
        view = signUpView;
      break;

      case "modify":
        view = modifyView;
      break;

      default:
        
        break;
    }

    return view;

  };

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  {props.mode}
                </Typography>
              {switchView(props.mode)}
            </div>
        </Container>
    );

}

Account.propTypes = {
  mode: PropTypes.string,
  onRegister: PropTypes.func
};

Account.defaultProps = {
  mode: true,
  onRegister: (id, pw) => {}
}

export default Account;