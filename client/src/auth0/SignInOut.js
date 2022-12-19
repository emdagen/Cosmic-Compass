import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const SignInOut = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const { loadingObj } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        if (isAuthenticated) {
          logout({ returnTo: window.location.origin });
        } else {
          loginWithRedirect();
        }
      }}
    >
      {loadingObj.user !== 'loading' ? 'Log Out' : 'Log In'}
    </button>
  );
};

export default SignInOut;
