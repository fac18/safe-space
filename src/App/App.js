import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Report, Support } from '../pages';
import { Footer } from '../components';
import SectionDivider from '../pages/SectionDivider';

// packages and utils
import uuid from 'uuid/v4';
import { getQuestions, generateId, convertArrayToObject } from '../utils';
import dividers from '../model/dividers';

// fallback data
import hardQuestions from '../model/questions';
import hardResponses from '../model/responses';

function App() {
  const [questions, setQuestions] = useState(null);
  const [responses, setResponses] = useState(null);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(0);

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
          ref: id, // guaranteed to be unique
          email: '',
        });
      })
      .catch(err => {
        setUser({
          ref: uuid(), // may be non-unique (but very unlikely)
          email: '',
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
                    page={page}
                    setPage={setPage}
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
          path='/dividers/:index'
          render={() => <SectionDivider dividers={dividers} />}
        />

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
