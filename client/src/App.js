import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { refreshToken } from './redux/actions/authAction'
import { getPosts } from './redux/actions/postAction';

import PageRender from './customRouter/PageRender';
//Không sài được
// import PrivateRouter from './customRouter/PrivateRouter';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register'
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import StatusModal from './components/StatusModal';

function App() {
  const { auth, status, modal } = useSelector(state => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  useEffect(() => {
    if (auth.token) dispatch(getPosts(auth.token))
  }, [dispatch, auth])

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />

      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}

          <Routes>
            <Route path="/" element={auth.token ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/:page" element={<PageRender />} />
            <Route path="/:page/:id" element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
