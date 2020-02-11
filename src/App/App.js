import React from 'react';
import './App.css';
import { FAQs, Home } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer } from '../components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
