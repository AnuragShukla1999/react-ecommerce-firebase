import React from 'react'
import Navbar from '../navbar/Navbar'
import { Footer } from 'antd/es/layout/layout'

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>

        <div className="main-content min-h-screen">
          {children}
        </div>

        <Footer/>
    </div>
  )
}

export default Layout