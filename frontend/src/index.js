import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Login from './pages/loginpage';
import Signup from './pages/signupPage';
import Home from './pages/homepage';
import AuthProvider from './context/AuthContext';
import TreksDetails from './pages/trekdetails';
import Main from './pages/main';
import BookingDisplay from './pages/bookingDisplay';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element = {<Main/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='home' element={<Home/>} />
      <Route path='treks/:trekid' element={<TreksDetails />} />
      <Route path="/booking" element={<BookingDisplay/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
