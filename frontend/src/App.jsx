import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Contact from './components/Contact'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Navbar />
      
      <Route exact path='/'><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/contact'><Contact /></Route>
      <Route path='/signup'><Signup /></Route>

    </>
  )
}

export default App