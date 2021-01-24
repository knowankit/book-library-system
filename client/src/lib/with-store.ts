import { combineReducers } from 'redux'
import books from 'reducers/books'
import book from 'reducers/book'

const reducers = combineReducers({
  books,
  book
})

export default reducers
