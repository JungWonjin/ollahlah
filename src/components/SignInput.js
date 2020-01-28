import React from 'react';
import TextField from '@material-ui/core/TextField';

const SignInput = (props) => {
  
    return(
        <div>
            <TextField onChange={props.onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="Email Address"
                name="userId"
                autoComplete="email"
                disabled={props.mode === "modify"}
                defaultValue={props.mode === "modify" ? window.sessionStorage.getItem('id') : null}
              />
              <TextField onChange={props.onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
        </div>
    );
};

export default SignInput;