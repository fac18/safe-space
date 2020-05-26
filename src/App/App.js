import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FAQs, Home, About, Report, Support, Splitter, Refresh } from './index';

// React Router renders the first <Route> with path matching the URL
// we use the 'exact' keyword where necessary to tell the router that the match must be perfect
// the 404 is handled by leaving out the path property - this component will always be rendered if none above it yield a match
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/choose' render={() => <Splitter />} />
        <Route exact path='/report/:index' render={() => <Report />} />
        <Route exact path='/report/section/:index' render={() => <Report />} />
        <Route exact path='/report/submit' render={() => <Report />} />
        <Route exact path='/report/confirm' render={() => <Report />} />
        <Route path='/frequently-asked-questions' render={() => <FAQs />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/support' render={() => <Support />} />
        <Route path='/refresh' render={() => <Refresh />} />
        <Route render={() => <Error404 />} />
      </Switch>
    </>
  );
}

export default App;
