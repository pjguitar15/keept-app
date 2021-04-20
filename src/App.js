import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home/Home.jsx'
import DiaryPage from './pages/DiaryPage/DiaryPage.jsx'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/diary'>
          <DiaryPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
