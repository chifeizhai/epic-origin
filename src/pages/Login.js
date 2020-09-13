import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import { observable } from 'mobx';

const Component=observable(()=> {
  const{AuthStore}=useStores();
  return (
    <>
      <h1>11</h1>
    </>
  );
})

export default Component;