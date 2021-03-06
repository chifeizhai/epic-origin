import React from 'react';
import { observer }from 'mobx-react';
import {useStores} from '../stores'

const Home = observer(() => {
  const { UserStore } = useStores();
    return(
        <>
          {
          UserStore.currentUser ?
            <>
              Hello!{UserStore.currentUser.attributes.username}
            </> :
            <>
              用户未登录
            </>
        }
        </>
    );
})

export default Home;