import React from 'react';
import './App.css';
import { FAQs, Home } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer } from '../components/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/frequently-asked-questions" render={() => <FAQs />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
