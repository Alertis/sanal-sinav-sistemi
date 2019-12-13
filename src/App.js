import React from 'react';
import Button from '@material-ui/core/Button';
import {Route, Switch} from 'react-router-dom'
//Pages 
import Login from './pages/login/login.js'

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/login" component={Login} ></Route>
      </Switch>
    </div>
  );
}

export default App;
