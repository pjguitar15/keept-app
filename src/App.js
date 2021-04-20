import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import DiaryPage from './pages/DiaryPage/DiaryPage.jsx'
import CreatePage from './pages/CreatePage/CreatePage.jsx'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/diary'>
          <DiaryPage />
        </Route>
        <Route path='/diary/create'>
          <CreatePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
