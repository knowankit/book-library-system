import React from 'react';
import UIBanner from 'components/UI/banner'
import UINavigation from 'components/UI/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from 'containers/books'

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

const App = (): JSX.Element => {
  return (
    <Router>
      <UIBanner />
      <UINavigation />

      <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/add">
            <About />
          </Route>
          <Route path="/edit">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
