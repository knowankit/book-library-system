import { FC } from 'react'
import { BookProps } from 'types/books'

type IProps = BookProps & { onEdit: (_id: string | number) => void } & { onDelete: (_id: string | number) => void }

const Book:FC<IProps> = ({ _id, title, pageCount, thumbnailUrl, shortDescription, authors, longDescription, onEdit, onDelete }):JSX.Element => {
  return (
      <div className='book-container'>
        <div className='book-image'>
          <img src={thumbnailUrl} height='200' alt='Book thumbnail' />
        </div>
        <div className='book-details'>
          <b className='book-title'>{title}</b>
          <p className='book-description'>{shortDescription || longDescription}</p>
          <p className='book-page-count'>Total pages: {pageCount}</p>
          <p className='book-author'>By: {authors}</p>
          <div className='button-groups'>
            <button className='edit-button' onClick={() => onEdit(_id)}><i className='bx bxs-edit-alt'></i> Edit</button>
            <button className='delete-button' onClick={() => onDelete(_id)}><i className='bx bxs-edit-alt'></i> Delete</button>
          </div>
        </div>
        <style>
          {
            `
              .edit-button i {
                color: white;
              }

              .delete-button i {
                color: white;
              }

              .button-groups {
                display: flex;
              }
            `
          }
        </style>
      </div>
    )
}

export default Book
