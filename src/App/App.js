import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FAQs, Home, About, Report, Support, Splitter } from './index';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/choose' render={() => <Splitter />} />
        <Route exact path='/report/:index' render={() => <Report />} />
        <Route exact path='/report/section/:index' render={() => <Report />} />
        <Route exact path='/report/submit' render={() => <Report />} />
        <Route exact path='/report/confirm' render={() => <Report />} />
        <Route path='/frequently-asked-questions' render={() => <FAQs />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/support' render={() => <Support />} />
      </Switch>
    </>
  );
}

export default App;
