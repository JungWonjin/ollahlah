import React from 'react';
import Account from './Account';

export default function SignIn(props) {
  return (
      <Account mode={true} history={props.history}/>
  );
}
