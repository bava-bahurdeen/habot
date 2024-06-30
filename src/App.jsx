import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Mainpage from './Mainpage'
import "./App.css"
export default function App() {
  return (
    <div className='font-sans'>
      <Header/>
      <Mainpage/>
      <Footer/>
    </div>
  )
}
