import React, { useState, useEffect } from 'react';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Report, Support } from '../pages';
import { Route, Switch } from 'react-router-dom';
import { Footer } from '../components';

// packages and utils
import uuid from 'uuid/v4';
import { getQuestions, generateId, convertArrayToObject } from '../utils';

// fallback data
import hardQuestions from '../model/questions';
import hardResponses from '../model/responses';

function App() {
  const [questions, setQuestions] = useState(null);
  const [responses, setResponses] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getQuestions()
      .then(records => {
        console.log(records);
        setQuestions(records);
        let responseArr = [];
        records.map(question => responseArr.push(question.question));
        setResponses(convertArrayToObject(responseArr));
      })
      .catch(err => {
        setQuestions(hardQuestions);
        setResponses(hardResponses);
        console.log(
          'Failed to fetch question data - falling back to hard coding. Error: ',
          err
        );
      });

    generateId()
      .then(id => {
        setUser({
          ref: id,
        });
      })
      .catch(err => {
        setUser({
          ref: uuid(),
        });
        console.log(
          'Failed to fetch user data - falling back to hard coding. Error: ',
          err
        );
      });
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Home />
            </>
          )}
        />
        {questions
          ? questions.map((question, i) => (
              <Route
                key={i}
                path={`/report/${question.page}`}
                render={() => (
                  <Report
                    questions={questions}
                    responses={responses}
                    setResponses={setResponses}
                    user={user}
                    setUser={setUser}
                  />
                )}
              />
            ))
          : null}
        <Route
          exact
          path='/frequently-asked-questions'
          render={() => <FAQs />}
        />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/support' render={() => <Support />} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
