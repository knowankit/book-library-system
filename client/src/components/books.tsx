import React, { useEffect, useState, FC } from 'react'

type BooksProps = {
  id: number,
  username: string
}

interface IProps {
  books: BooksProps[];
  fetchBooks: () => void
}

const Books: FC<IProps> = ({ books, fetchBooks}):JSX.Element => {
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      {books.map(book => <p>{book.username}</p>)}
    </div>
  )
}

export default Books
