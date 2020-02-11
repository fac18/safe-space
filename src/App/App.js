import React from 'react';
import './App.css';
import { FAQs, Home, About } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer } from '../components/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/frequently-asked-questions" render={() => <FAQs />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
