import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header';
import Footer from './components/footer';

function Routee() {
  return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default Routee;