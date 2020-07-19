import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css';
import { adminRoutes } from './routes'
import Frame from './components/Frame/Index'
import './App.css'
import { isLogined } from './utils/auth'

function App() {
  return (
    isLogined()?
    <Frame>
    <Switch>
      {adminRoutes.map(route => {
        return (
          <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
          return <route.component {...routeProps} />;
        }} />
        )
      })}
      <Redirect to={adminRoutes[0].path}  from='/' />
      <Redirect  to='/404' />
    </Switch>
    </Frame>:<Redirect to='/login' />
  );
}

export default App;
