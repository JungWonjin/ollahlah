import React from 'react';

import Account from './Account';

export default function SignUp(props) {

  return (
    <Account mode="signup" history={props.history} />
  );
}
