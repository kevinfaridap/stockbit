import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Main/Home'
import MovieList from '../../pages/Main/MovieList'
import MovieDetails from '../../pages/Main/MovieDetails'

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/moviedetails/:id" component={MovieDetails} />
          <Route path="/movies" component={MovieList} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default MainRoute
