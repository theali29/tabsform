import React from 'react'
import './App.css'
import Home from './pages/home'
import Layout from './components/Layout'
import Product from './pages/product'
import SignUp from './pages/signup'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/*' element={<Product />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
