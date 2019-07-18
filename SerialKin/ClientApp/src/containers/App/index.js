import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Main from '../Main';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Menu />
        <div className="content">
          <Switch>
            <Route href="/" component={Main} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
