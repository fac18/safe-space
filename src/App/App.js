import React, { useState, useEffect } from 'react';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Report } from '../pages/index';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
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
  // console.log(questions.questions);

  return (
    <>

      
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <Home></Home>
                <Link to='/report/0'>Start</Link>
              </>
            )}
          />
          {questions
            ? questions.map((question, i) => (
              <Route
                key={i}
                path={`/report/${question.page}`}
                render={() => <Report questions={questions} />}
              />
            ))
            : null}
          <Route
            exact
            path='/frequently-asked-questions'
            render={() => <FAQs />}
          />
          <Route exact path='/about' render={() => <About />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
