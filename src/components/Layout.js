import React from 'react'
import Navbar from './navbar.js'
import Footer from './footer.js'
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
