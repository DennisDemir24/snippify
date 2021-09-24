import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import Login from './components/Auth/Login'
import Snippets from './components/Snippets/Snippets'
import './index.css'

const App = () => {
  return (
    <div className="">
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/snippets" component={Snippets} />
            </Switch>
          </div>
        </>
      </Router>
    </div>
  )
}

export default App

