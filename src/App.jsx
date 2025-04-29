import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home'
import Story from './pages/Story'
import Products from './pages/Products'
import Financing from './pages/Financing'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import ScrolltoTop from './components/ScrolltoTop'
import PersonalDetails from './pages/PersonalDetails'
import Signup from './pages/Signup';
import Security from './pages/Security';
import Preference from './pages/Preference';
import PaymentDetail from './pages/PaymentDetail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassowrd from './pages/ResetUserPassowrd';

export default function App() {
  return (
    <div>
      <Router>
        <ScrolltoTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/story' element={<Story />} />
          <Route path='/products' element={<Products />} />
          <Route path='/financing' element={<Financing />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/personal-detail' element={<PersonalDetails />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/security' element={<Security />}/>
          <Route path='/preference' element={<Preference />}/>
          <Route path='/payment-detail' element={<PaymentDetail />}/>
          <Route path='/forgot-password' element={<ForgotPassword />}/>
          <Route path='/reset-password' element={<ResetPassowrd />}/>
         
        </Routes>
      </Router>

   
      <ToastContainer />
    </div>
  )
}
