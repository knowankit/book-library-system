import { fetchBooks } from 'actions/books'
import { setBook } from 'actions/book'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Books from 'components/books'
import { BookProps } from 'types/books'

const mapStateToProps = (state: {
  books: {
    books: BookProps[];
  };
}) => {
  return {
    books: state.books.books,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      fetchBooks,
      setBook
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
