import React, { useState, useEffect, FC, ChangeEvent } from 'react'
import { BookProps } from 'types/books'
import { withRouter } from "react-router";
import UIBook from 'components/UI/book'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  books: BookProps[];
  fetchBooks: () => void,
  setBook: (book: BookProps) => void;
  deleteBook: (id: string | number) => void;
  doneFetching: boolean,
}

const Books: FC<IProps> = ({ books, fetchBooks, setBook, deleteBook, history, doneFetching }): JSX.Element => {
  const [filteredData, setFilteredData] = useState<BookProps[]>(books)

  useEffect(() => {
    getBooks()
  }, [])

  useEffect(() => {
    if(doneFetching) {
      setFilteredData(books)
    }
  }, [doneFetching])

  const getBooks = async () => {
    await fetchBooks()
  }

  const handleEdit = (id: string | number) => {
    const book = books.filter(book => book._id.toString() === id.toString())

    if (book.length > 0) {
      setBook(book[0])
      history.push('/edit')
    }
  }

  const handleDelete = async (id: string | number) => {
    await deleteBook(id)
    await fetchBooks()
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    const bookList = [...books]
    const filteredDataTemp = bookList.filter(book => book.title.toLowerCase().indexOf(value) > -1)

    setFilteredData(filteredDataTemp)
  }

  return (
    <>
    <div className='form-search'>
      <input type='search' placeholder='Search books here...' onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)} />
    </div>

    <div className='books-container'>
      {filteredData.map(book => <UIBook {...book} key={book._id} onEdit={handleEdit} onDelete={handleDelete} />)}
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

          .form-search {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
          }

          .form-search input {
            height: 45px;
            border-radius: 50px;
            border: 1px solid #f2f2f2;
          }

          .form-search input[type="search"] {
            box-sizing: border-box;
            padding-left: 20px;
            box-shadow: 3px -3px 15px -6px #ccc;
          }

          .form-search input:outline {
            focus: none;
          }
        `
      }
    </style>
  </>
  )
}

export default withRouter(Books)
