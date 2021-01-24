import produce from 'immer'
import constants from 'constants/books'

const initialState = {
  books: [],
  isFetching: false,
  doneFetching: true,
  errors: {}
}

export default produce((draftState, action) => {
  switch (action.type) {
    case constants.FETCH_BOOKS_REQUEST:
      draftState.isFetching = true
      draftState.doneFetching = false

      break

    case constants.FETCH_BOOKS_SUCCESS:
      draftState.books = action.books
      draftState.doneFetching = true
      draftState.isFetching = false

      break

    case constants.FETCH_BOOKS_FAILURE:
      draftState.isFetching = false
      draftState.doneFetching = true

      break
  }
}, initialState)
