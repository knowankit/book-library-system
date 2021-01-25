import React, { useEffect, FC, ChangeEvent } from 'react'
import { BookProps } from 'types/books'
import UIFormSelectSkeleton from 'components/UI/select-book-skeleton'
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

  const renderUI = () => {
    if(!book.title) {
      return <UIFormSelectSkeleton />
    }

    return (

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
    )
  }

  return (
    <>

      <div className='book-form'>
        {renderUI()}
      </div>
      <style>
        {
          `
            .add-book-form{
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .form-item {
              margin-bottom: 20px;
              flex-direction: column;
              justify-content: center;
            }

            .form-item label {
              display: block;
              width: 98%;
              margin-bottom: 5px;
            }

            .form-item input {
              width: 98%;
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
