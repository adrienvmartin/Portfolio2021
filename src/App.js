import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Video from './pages/Video';
import Photo from './pages/Photo';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Main} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/photo" component={Photo} />
        </Switch>
      </Fragment>
    </Router>
  )
}