import constants from 'constants/books'
import { Dispatch } from 'redux';

export const fetchBooks = () => async (dispatch:Dispatch) => {
  dispatch({
    type: constants.FETCH_BOOKS_REQUEST
  })

  try {
    const url = '/books'
    const response = await fetch(url).then(res => res.json())

    dispatch({
      type: constants.FETCH_BOOKS_SUCCESS,
      books: response
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_BOOKS_FAILURE,
      errors: 'Fetch error'
    })
  }
}
