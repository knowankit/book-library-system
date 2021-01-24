import constants from 'constants/book'

export const updateNewBookDetails = (key, value) => {
  return {
    type: constants.UPDATE_NEW_BOOK_DETAILS,
    key,
    value
  }
}

export const saveBook = () => async (dispatch, getState) => {
  dispatch({
    type: constants.SAVE_NEW_BOOK_DETAILS_REQUEST
  })

  try {
    const saveURL = '/book'
    const data = getState().book.book

    const response = await fetch(saveURL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })

    if (response.status === 200) {
      dispatch({
        type: constants.SAVE_NEW_BOOK_DETAILS_SUCCESS
      })
    }
  } catch (error) {
    dispatch({
      type: constants.SAVE_NEW_BOOK_DETAILS_FAILURE,
      errors: ['unable to save']
    })
  }
}

export const setBook = (book) => {
  return {
    type: constants.SET_BOOK,
    value: book
  }
}

export const resetBook = () => {
  return {
    type: constants.RESET_BOOK
  }
}

export const updateBook = () => async (dispatch, getState) => {
  dispatch({
    type: constants.UPDATE_BOOK_DETAILS_REQUEST
  })

  try {
    const updateURL = '/book'
    const data = getState().book.book

    const response = await fetch(updateURL, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })

    if (response.status === 200) {
      dispatch({
        type: constants.UPDATE_BOOK_DETAILS_SUCCESS
      })
    }
  } catch (error) {
    dispatch({
      type: constants.UPDATE_BOOK_DETAILS_FAILURE,
      errors: ['unable to update']
    })
  }
}
