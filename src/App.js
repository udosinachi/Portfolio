import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {} from 'react-bootstrap'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomePage} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
