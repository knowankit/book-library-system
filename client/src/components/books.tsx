import React, { useEffect, FC } from 'react'
import { BookProps } from 'types/books'
import UIBook from 'components/UI/book'
interface IProps {
  books: BookProps[];
  fetchBooks: () => void
}

const Books: FC<IProps> = ({ books, fetchBooks}):JSX.Element => {
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
  <>
    <h1>Book Library Management</h1>
    <div className='books-container'>
      {books.map(book => <UIBook {...book} key={book._id} />)}
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
