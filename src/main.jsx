import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import GoogleOAuthProvider
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='73511112737-rkrmjgqdcpq15uh5nfa3hovah6ue7ec5.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>,
)