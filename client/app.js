import React from 'react'
import {Navbar} from './components'
import Footer from '../client/components/Footer'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
