import React, { useState, useEffect } from 'react';
import './App.css';
<<<<<<< HEAD
import { FAQs, Home, About } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
||||||| merged common ancestors
import { FAQs, Home, About } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
=======
import { FAQs, Home, About } from '../pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
>>>>>>> master
import { Footer } from '../components/index';

import { getQuestions } from '../utils/getData';
import hardQuestions from '../model/questions';

function App() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    getQuestions()
      .then(records => {
        setQuestions(records);
      })
      .catch(() => {
        setQuestions(hardQuestions);
        console.log('Failed to fetch questions - falling back to hard coding.');
      });
  }, []);


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
          {questions.map((question, index) => (
          <Route path={`/questionnaire/${question.page}`} render={() => <Questionnaire questions={questions} />} />

        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
