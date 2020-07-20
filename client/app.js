import React from 'react'
import {Navbar} from './components'
import {Footer} from './components/'
import Routes from './routes'

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
