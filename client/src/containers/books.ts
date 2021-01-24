import { fetchBooks } from 'actions/books'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Books from 'components/books'

const mapStateToProps = (state: {
  books: {
    books: [];
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
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
