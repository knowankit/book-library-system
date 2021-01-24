import constants from 'constants/books'

export const fetchBooks = () => async (dispatch) => {
  dispatch({
    type: constants.FETCH_BOOKS_REQUEST
  })

  try {
    const url = '/users'
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
