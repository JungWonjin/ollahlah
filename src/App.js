import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SignDialog from './components/SignDialog';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SignDialog open={open} onClose={handleClose} />
      <AppBar position="static">
        <Toolbar>
          <MenuIcon/>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls=""
              aria-haspopup="true"
              onClick={handleClickOpen}
              color="inherit">
                <AccountCircle/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
