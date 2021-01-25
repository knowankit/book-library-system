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

      case constants.UPDATE_BOOK_DETAILS_REQUEST:
        draftState.isFetching = true
        draftState.doneFetching = false

        break

      case constants.UPDATE_BOOK_DETAILS_SUCCESS:
        draftState.doneFetching = true
        draftState.isFetching = false

        break

      case constants.UPDATE_BOOK_DETAILS_FAILURE:
        draftState.isFetching = false
        draftState.doneFetching = true

        break

      case constants.UPDATE_NEW_BOOK_DETAILS:
        draftState.book[action.key] = action.value

        break

      case constants.DELETE_BOOK_REQUEST:
        draftState.isFetching = true
        draftState.doneFetching = false

        break

      case constants.DELETE_BOOK_SUCCESS:
        draftState.doneFetching = true
        draftState.isFetching = false

        break

      case constants.DELETE_BOOK_FAILURE:
        draftState.isFetching = false
        draftState.doneFetching = true

        break

    case constants.SET_BOOK:
      draftState.book = action.value

      break

    case constants.RESET_BOOK:
      return initialState
  }
}, initialState)
