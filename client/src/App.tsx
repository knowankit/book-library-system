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
import EditBook from 'containers/edit-book'
import { useStore } from 'react-redux'

const App = (): JSX.Element => {
  const hasBookDetails = useStore().getState().book.book.title

  return (
    <Router>
      <UIBanner />
      <UINavigation />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/add">
          <AddBook />
        </Route>
        <Route path="/edit">
          <EditBook />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
