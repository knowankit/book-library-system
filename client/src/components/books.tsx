import React, { useState, useEffect, FC } from 'react'
import { BookProps } from 'types/books'
import { withRouter } from "react-router";
import UIBook from 'components/UI/book'
interface IProps {
  books: BookProps[];
  history: any,
  fetchBooks: () => void,
  setBook: (book: BookProps) => void;
  isEditPage: boolean,
}

const Books: FC<IProps> = ({ books, fetchBooks, isEditPage, setBook, history}):JSX.Element => {
  useEffect(() => {
    fetchBooks()
  }, [])


  const handleEdit = (id: string | number) => {
    const book = books.filter(book => book._id.toString() === id.toString())

    if (book.length > 0) {
      setBook(book[0])
      history.push('/edit')
    }
  }

  return (
  <>
    <div className='books-container'>
      {books.map(book => <UIBook {...book} key={book._id} isEditPage={isEditPage} onEdit={handleEdit} />)}
    </div>
    <style>
      {
        `
          .books-container {
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px;
          }
        `
      }
    </style>
  </>
  )
}

export default withRouter(Books)
