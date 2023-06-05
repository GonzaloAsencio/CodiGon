import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tutorial from '../TutorialPage/Tutorial';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';
import Login from '../LoginPage/index';
import Register from '../ReginsterPage/index';

function App() {
  return (
  <Router>
    <Routes>
       <Route path='/' exact Component={Main}/>
       <Route path='/tutorial' exact Component={Tutorial}/>
       <Route path='/contact' exact Component={Contact}/>
       <Route path='/login' exact Component={Login}/>
       <Route path='/register' exact Component={Register}/>
       <Route path='/login' exact Component={Login}/>
    </Routes>
  </Router>
  );
}
  /*<Route path="/*" element={<Navigate to="/" />} />*/

export default App;
