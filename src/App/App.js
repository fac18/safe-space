import React, { useState, useEffect } from 'react';
import './App.css';
import { FAQs, Home, About } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Footer } from '../components/index';

import { getQuestions } from '../utils/getData';
import hardQuestionList from '../utils/questions';

function App() {
  // const [questions, setQuestions] = useState(null);

  console.log(process.env.NODE_ENV);

  // useEffect(() => {
  //   getQuestions().then(records => {
  //     console.log(records);
  //     setQuestions(records);
  //   });
  // }, []);

  console.log({ hardQuestionList });
  // currently sending hard questions to form
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Home></Home>
                <Link to="/0">Start</Link>
              </>
            )}
          />
          <Route
            exact
            path="/frequently-asked-questions"
            render={() => <FAQs />}
          />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
