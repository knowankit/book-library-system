import produce from 'immer'
import constants from 'constants/book'

const initialState = {
  book: {
    _id: '',
    title: '',
    pageCount: 0,
    thumbnailUrl: '',
    shortDescription: '',
    author: ''
  },
  isFetching: false,
  doneFetching: true,
  errors: {},
  saving: false
}

export default produce((draftState, action) => {
  switch (action.type) {
    case constants.UPDATE_NEW_BOOK_DETAILS:
      draftState.book[action.key] = action.value

      break
  }
}, initialState)
