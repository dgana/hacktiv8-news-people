import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import News from './components/News/Main.js'
import People from './components/People/Main.js'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={News} />
      <Route exact path='/people' component={People} />
    </div>
  </Router>
)

export default App
