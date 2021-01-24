import React, { useEffect, FC, ChangeEvent } from 'react'
import { BookProps } from 'types/books'

interface IProps {
  book: BookProps;
  updateNewBookDetails: (name: string, value: string | number | Array<string>) => void;
  updateBook: () => void;
  resetBook: () => void;
}

const EditBook: FC<IProps>  = ({ book, updateNewBookDetails, updateBook, resetBook }): JSX.Element => {
  useEffect(() => {
    return function () {
      resetBook()
    }
  }, [])

  const handleChange = (name: string, value: string | number | Array<string>) => {
    updateNewBookDetails(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    updateBook()
  }

  return (
    <>
      <div className='add-book-form'>
        <form onSubmit={handleSubmit} method='post'>
          <div className='form-item'>
            <label>Book Name</label>
            <input type='text' name='title' value={book.title} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value)} />
          </div>


          <div className='form-item'>
            <label>Description</label>
            <input type='text' name='shortDescription' value={book.shortDescription} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value)} />
          </div>


          <div className='form-item'>
            <label>Cover Image</label>
            <input type='text' name='thumbnailUrl' value={book.thumbnailUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value)} />
          </div>


          <div className='form-item'>
            <label>Author</label>
            <input type='text' name='author' value={book.author} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value)} />
          </div>


          <div className='form-item'>
            <label>Total pages</label>
            <input type='number' name='pageCount' value={book.pageCount} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.name, e.target.value)} />
          </div>

          <div className='form-item-submit'>
            <input type='submit' className='submit-button' value='Update' />
          </div>
        </form>
      </div>
      <style>
        {
          `
            .add-book-form{
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 0px 20rem;
            }

            .form-item {
              margin-bottom: 20px;
            }

            .form-item label {
              display: block;
              width: 100%;
              margin-bottom: 5px;
            }

            .form-item input {
              width: 100%;
              height: 25px;
            }

            .submit-button {
              border: none;
              padding: 10px;
              background: #1ea94b;
              color: white;
              font-size: 18px;
              cursor: pointer;
            }
          `
        }
      </style>
    </>
  )
}

export default EditBook
