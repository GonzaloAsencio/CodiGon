import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tutorial from '../TutorialPage/Tutorial';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';
import Login from '../LoginPage/index';
import Register from '../ReginsterPage/index';
import CreatePost from '../CreatePostPage/index';
import PostPage from '../PostPage/index';
import EditPost from '../EditorPage/index';
import { UserContextProvider } from '../UserContext';

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path='/' exact Component={Main}/>
        <Route path='/tutorial' exact Component={Tutorial}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/register' exact Component={Register}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/create' exact Component={CreatePost}/>
        <Route path='/tutorial/post/:id' element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  </UserContextProvider>
  );
}
  /*<Route path="/*" element={<Navigate to="/" />} />*/

export default App;
