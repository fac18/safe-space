import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Support, Review, Submit } from '../pages';
import Report from '../pages/Report/Report';

import { Footer } from '../components';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/report/:index' render={() => <Report />} />

        <Route path='/frequently-asked-questions' render={() => <FAQs />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/support' render={() => <Support />} />
        <Route path='/review' render={() => <Review />} />
        <Route path='/submit' render={() => <Submit />} />
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
