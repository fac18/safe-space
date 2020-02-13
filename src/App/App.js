import React, { useState, useEffect } from 'react';
import '@material/button/dist/mdc.button.css';
import './App.css';
import { FAQs, Home, About } from '../Pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer, ButtonPrimary, ButtonSecondary } from '../components/index';

// import {Button} from '@material-ui/core';


 


import { getQuestions } from '../utils/getData';

function App() {
  const [questions, setQuestions] = useState(null);

  console.log(process.env.NODE_ENV);

  useEffect(() => {
    getQuestions().then(records => {
      console.log(records);
      setQuestions(records);
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
