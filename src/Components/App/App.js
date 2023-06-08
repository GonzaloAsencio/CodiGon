import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from '../UserContext';


const RegisterLayout = lazy(() => import('../Pages/ReginsterPage/index'));
const LoginLayout = lazy(() => import('../Pages/LoginPage/index'));
const MainLayout = lazy(() => import('../Pages/Main/Main'));
const TutorialsLayout = lazy(() => import('../Pages/TutorialPage/Tutorial'));
const PostLayout = lazy(() => import('../Pages/PostPage/index'));
const CreatePostLayout = lazy(() => import('../Pages/CreatePostPage/index'));
const EditPostLayout = lazy(() => import('../Pages/EditorPage/index'));

function App() {
  return (
    <UserContextProvider>
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
        <Routes>
          <Route path='/' exact Component={MainLayout}/>
          <Route path='/tutorial' exact Component={TutorialsLayout}/>
          <Route path='/register' exact Component={RegisterLayout}/>
          <Route path='/login' exact Component={LoginLayout}/>
          <Route path='/create' exact Component={CreatePostLayout}/>
          <Route path='/tutorial/post/:id' exact Component={PostLayout} />
          <Route path="/edit/:id" element={EditPostLayout} />
        </Routes>
    </Router>
    </Suspense>
  </UserContextProvider>
  );
}
  /*<Route path="/*" element={<Navigate to="/" />} />*/

export default App;
