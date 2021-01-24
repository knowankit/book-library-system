import { connect } from 'react-redux';
import { updateNewBookDetails, saveBook } from 'actions/book'
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import AddBook from 'components/add-book'
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
      saveBook
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
