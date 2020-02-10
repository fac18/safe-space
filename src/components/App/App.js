import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './App.css';

import getQuestions from '../../utils/getQuestions';

function App() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    // getQuestions().then(records => {
    //   setQuestions(records);
    // });
    setQuestions(getQuestions());
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      {questions ? <h2>We have questions!</h2> : null}
    </div>
  );
}

export default App;
