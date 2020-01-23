import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import SignInfoContext from './Store/SignInfoContext';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));

function Header() {

  const { isSignIn } = useContext(SignInfoContext);
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <MenuIcon className={classes.menuButton} onClick={()=> {alert(isSignIn);}}/>
          <Typography variant="h6" className={classes.title}>
            {isSignIn && window.sessionStorage.getItem('id')}
          </Typography>
            <IconButton
                component={RouterLink}
                to = {isSignIn ? "./login":"./signin"}
                edge="end"
                aria-label="account of current user"
                aria-controls=""
                aria-haspopup="true"
                onClick=""
                color="inherit">
                    <AccountCircle/>
            </IconButton>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
