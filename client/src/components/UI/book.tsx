import { FC } from 'react'
import { BookProps } from 'types/books'

type IProps = BookProps & { onEdit: (_id: string | number) => void }

const Book:FC<IProps> = ({ _id, title, pageCount, thumbnailUrl, shortDescription, longDescription, status, onEdit }):JSX.Element => {
  return (
      <div className='book-container'>
        <div className='book-image'>
          <img src={thumbnailUrl} height='200' />
        </div>
        <div className='book-details'>
          <b className='book-title'>{title}</b>
          <p className='book-description'>{shortDescription || longDescription}</p>
          <button className='edit-button' onClick={() => onEdit(_id)}><i className='bx bxs-edit-alt'></i> Edit</button>
        </div>
        <style>
          {
            `
              .edit-button i {
                color: white;
              }
            `
          }
        </style>
      </div>
    )
}

export default Book
