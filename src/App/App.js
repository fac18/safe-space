import React, { useState, useEffect } from 'react';
import './App.css';
import { FAQs, Home, About } from '../pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
          <Route exact path='/' render={() => <Home />} />
          <Route path='/frequently-asked-questions' render={() => <FAQs />} />
          <Route exact path='/about' render={() => <About />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
