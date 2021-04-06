import React, { useState } from 'react'
import logo from '/public/logo.svg'
import { Card } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import SongList from './pages/SongList'
import Playlist from './pages/Playlist'

const routesConfig = [
  { path: '/login', component: Login, isLoggedIn: true },
  { path: '/register', component: Register, isLoggedIn: true },
  { path: '/song-list', component: SongList, isLoggedIn: true },
  { path: '/playlist', component: Playlist, isLoggedIn: true }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Switch>
          {routesConfig.map(({ path, component: Component, isLoggedIn }) => {
            return isLoggedIn ? (
              <Route path={path} key={path}>
                <Component />
              </Route>
            ) : (
              <Route path="/login">
                <Login />
              </Route>
            )
          })}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
