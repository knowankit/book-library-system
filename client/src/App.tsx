import React from 'react';
import UIBanner from 'components/UI/banner'
import UINavigation from 'components/UI/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from 'containers/books'
import AddBook from 'containers/add-book'

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
          <Books isEditPage={false} />
        </Route>
        <Route path="/add">
          <AddBook />
        </Route>
        <Route path="/edit">
          <Books isEditPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
