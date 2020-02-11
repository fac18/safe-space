import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './App.css';

import getQuestions from '../../utils/getQuestions';
import helloWorld from '../../utils/helloWorld';

function App() {
  const [questions, setQuestions] = useState(null);
  const [hello, setHello] = useState(null);

  useEffect(() => {
    // fetch('.netlify/functions/get-questions/get-questions.js')
    //   .then(res => res.json())
    //   .then(data => setQuestions(data));

    getQuestions().then(records => {
      console.log(records);
      setQuestions(records);
    });

    helloWorld('Dan').then(hello => {
      console.log(hello);
      setHello(hello.message);
    });
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
      {hello ? <h2>{hello}</h2> : null}
    </div>
  );
}

export default App;
