import React, { useEffect, FC } from 'react'
import { BookProps } from 'types/books'
import UIBook from 'components/UI/book'
interface IProps {
  books: BookProps[];
  fetchBooks: () => void,
  isEditPage: boolean,
}

const Books: FC<IProps> = ({ books, fetchBooks, isEditPage}):JSX.Element => {
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
  <>
    <div className='books-container'>
      {books.map(book => <UIBook {...book} key={book._id} isEditPage={isEditPage} />)}
    </div>
    <style>
      {
        `
          .books-container {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `
      }
    </style>
  </>
  )
}

export default Books
