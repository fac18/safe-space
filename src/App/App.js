import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FAQs, Home, About, Report, Support, Splitter, Refresh } from './index';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/choose' render={() => <Splitter />} />
        <Route exact path='/report/:index' render={() => <Report />} />
        <Route exact path='/report/section/:index' render={() => <Report />} />
        <Route exact path='/report/submit' render={() => <Report />} />
        <Route exact path='/report/confirm' render={() => <Report />} />
        <Route
          exact
          path='/frequently-asked-questions'
          render={() => <FAQs />}
        />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/support' render={() => <Support />} />
        <Route exact path='/refresh' render={() => <Refresh />} />
        {/* (non-exact) home route goes last to catch all invalid URLs */}
        <Route path='/' render={() => <Home />} />
      </Switch>
    </>
  );
}

export default App;
