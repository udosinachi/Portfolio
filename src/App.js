import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {} from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import SocialMedia from './components/SocialMedia'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} exact />
        <Route path='/contact' component={ContactPage} exact />
      </main>
      <SocialMedia />
      <Footer />
    </Router>
  )
}

export default App
