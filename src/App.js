import React from 'react'
import './App.css'
import Home from './pages/home'
import Layout from './components/Layout'
import Product from './pages/product'
import SignUp from './pages/signup'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom'
import Pricing from './pages/pricing'
function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/products/*'
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />

        <Route
          path='/pricing'
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
