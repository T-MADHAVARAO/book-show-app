import {Route, Switch} from 'react-router-dom'

import Movies from './components/MoviesSection'
import MovieDetails from './components/MovieDetails'

import './App.css'

const App = () => (
  <div>
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
