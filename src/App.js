import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './components/pages/Popular';
import Newest from './components/pages/Newest';
import EndDate from './components/pages/EndDate';
import Tabs from './components/Tabs';

const App = (props) => {
  const { data } = props;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/popular' component={Popular} />
          <Route path='/newest' component={Newest} />
          <Route path='/end-date' component={EndDate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
