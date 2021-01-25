import { fetchBooks } from 'actions/books'
import { setBook, deleteBook } from 'actions/book'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Books from 'components/books'
import { BookProps } from 'types/books'

const mapStateToProps = (state: {
  books: {
    books: BookProps[];
    doneFetching: boolean;
  };
}) => {
  return {
    books: state.books.books,
    doneFetching: state.books.doneFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      fetchBooks,
      setBook,
      deleteBook
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
