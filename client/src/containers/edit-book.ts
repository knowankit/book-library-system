import { connect } from 'react-redux';
import { updateNewBookDetails, updateBook, resetBook } from 'actions/book'
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import EditBook from 'components/edit-book'
import { BookProps } from 'types/books'

const mapStateToProps = (state: {
  book: {
    book: BookProps;
  };
}) => {
  return {
    book: state.book.book,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      updateNewBookDetails,
      updateBook,
      resetBook
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
