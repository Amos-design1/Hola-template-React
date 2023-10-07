import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Game from './views/game'
import CommunityPosts from './views/community-posts'
import Home from './views/home'
import Booking from './views/booking'
import Counselling from './views/counselling'
import AboutUs from './views/about-us'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Game} exact path="/game" />
        <Route component={CommunityPosts} exact path="/community-posts" />
        <Route component={Home} exact path="/" />
        <Route component={Booking} exact path="/booking" />
        <Route component={Counselling} exact path="/counselling" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
