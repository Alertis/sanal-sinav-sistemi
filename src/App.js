import React from 'react';
import {Route, Switch} from 'react-router-dom'
//Pages 
import Login from './pages/login/login.js'
import Main from './pages/main/main.js'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/login" component={Login} ></Route>
      </Switch>
    </div>
  );
}

export default App;
