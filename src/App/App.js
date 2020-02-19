import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About, Report, Support, Review, Submit } from '../pages';
import { Footer } from '../components';
import SectionDivider from '../pages/SectionDivider';

// packages and utils
import uuid from 'uuid/v4';
import { getQuestions, generateId } from '../utils';
import dividers from '../model/dividers';

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
        setResponses(responseArr);
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
          ref: uuid(), // may be non-unique (but almost impossibly unlikely)
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
        <Route exact path='/' render={() => <Home />} />
        {questions
          ? questions.map((question, i) => (
              <Route
                key={i}
                path='/report/:index'
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
          path='/dividers/:index'
          render={() => (
            <SectionDivider questions={questions} dividers={dividers} />
          )}
        />
        <Route path='/frequently-asked-questions' render={() => <FAQs />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/support' render={() => <Support />} />
        <Route
          path='/review'
          render={() => <Review questions={questions} responses={responses} />}
        />
        <Route
          path='/submit'
          render={() => (
            <Submit
              user={user}
              setUser={setUser}
              questions={questions}
              responses={responses}
            />
          )}
        />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
