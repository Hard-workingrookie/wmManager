import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';
import App from './App'
import { mainRouters } from './routes'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
      <Switch>
        <Route path='/admin' render={routeProps => <App {...routeProps} />} />
        {mainRouters.map(route => {
          return <Route key={route.path} {...route} />
        })}
        <Redirect to='/admin'  from='/' />
        <Redirect to='/404' />
      </Switch>
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
