import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserContext } from './context/UserContext';
import SignUp from './pages/SignUp';
import Spinner from './material/Spinner';

const App = () => {
  const { setUserData, setLoadingObj, loadingObj } = useContext(UserContext);
  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    const userInfo = async () => {
      console.log('hello');
      try {
        const result = await fetch('/api/user', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const response = await result.json();
        setUserData(response.data);
        setLoadingObj({ ...loadingObj, user: 'verify' });
      } catch (err) {
        console.log('hello', err);
      }
    };
    isAuthenticated && userInfo();
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <div>
        {isAuthenticated && loadingObj.user === 'verify' ? (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<h1>home</h1>} />
            </Routes>
          </>
        ) : !isLoading && loadingObj.user === 'loading' ? (
          loadingObj.user === 'verify' || isAuthenticated ? (
            <Spinner />
          ) : (
            <SignUp />
          )
        ) : (
          <Spinner />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
