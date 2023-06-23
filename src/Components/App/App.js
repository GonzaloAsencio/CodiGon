import React,{lazy,Suspense, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import { UserContextProvider } from '../UserContext';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/index';
import './App.css';

const RegisterLayout = lazy(() => import('../Pages/ReginsterPage/index'));
const LoginLayout = lazy(() => import('../Pages/LoginPage/index'));
const MainLayout = lazy(() => import('../Pages/Main/Main'));
const TutorialsLayout = lazy(() => import('../Pages/TutorialPage/Tutorial'));
const PostLayout = lazy(() => import('../Pages/PostPage/index'));
const CreatePostLayout = lazy(() => import('../Pages/CreatePostPage/index'));
const EditPostLayout = lazy(() => import('../Pages/EditorPage/index'));

function App() {
  const [response,setResponse] = useState({});

  return (
    <UserContextProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <Header setResponse={setResponse}/>
        <Routes>
          <Route path='/' exact Component={MainLayout}/>
          <Route  
          forceRefresh={true}
          path='/tutorial'
          element= {<TutorialsLayout searchText={response}/>}
           />
          <Route path='/register' exact Component={RegisterLayout}/>
          <Route path='/login' exact Component={LoginLayout}/>
          <Route path='/create' exact Component={CreatePostLayout}/>
          <Route path='/tutorial/post/:id' exact Component={PostLayout} />
          <Route path="/edit/:id" element={EditPostLayout} />
        </Routes>
      <Footer/>
    </Suspense>
  </UserContextProvider>
  );
}
  /*<Route path="/*" element={<Navigate to="/" />} />*/

export default App;
