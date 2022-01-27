import React from 'react';
import './App.scss';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import {Context} from './Components/Context/Authication'

function App() {
  const {token, setToken} = React.useContext(Context)
  
  
  if(token){
    return <AuthenticatedApp />
  } else {
    return <UnauthenticatedApp />
  }
}

export default App;
