import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import LoginSignup from './containers/LoginSignup.js';
import ZildoPage from './containers/ZildoPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() =>{
      localStorage.setItem('current_theme', theme);
    }, [theme])

  return(
    <div className={`containerr ${theme}`}>
      {/*<ZildoPage theme={theme} setTheme={setTheme} /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={ZildoPage} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />
        </Switch>
      </Router>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignup/>} ></Route>
        </Routes> 
      </BrowserRouter>
      <ParticlesBg type="tadpole" bg={true} />
      <LoginSignup/> 
          
    </div>
  );
}

export default App;
