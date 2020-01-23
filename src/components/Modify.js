import React from 'react';
import Account from './Account';
import axios from 'axios';

export default function Modify(props) {

    

  return (
      <Account mode="modify" history={props.history}/>
  );
}
