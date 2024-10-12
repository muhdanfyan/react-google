//import useState
import React, { useState, useEffect } from 'react';

//import useGoogleLogin
import { useGoogleLogin } from '@react-oauth/google';

const App = () => {

  // state access token
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  // function to handle login success
  const handleLoginSuccess = (response) => {

    // get access token from response
    const token = response.access_token;

    //set token in state
    setAccessToken(token);

    // set token in localStorage
    localStorage.setItem('accessToken', token);
  };

  // function to handle login error
  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };

  // function to login with google
  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">
              <h5 className="card-title mb-0">Google Login with React</h5>
            </div>
            <div className="card-body">
              <div className='text-center'>
                {
                  accessToken
                    ? <div className='alert alert-success'> Login Success.</div>
                    : ''
                }
                <button className="btn btn-primary" onClick={() => login()}>Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;