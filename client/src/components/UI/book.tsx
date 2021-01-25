import { FC } from 'react'
import { BookProps } from 'types/books'

type IProps = BookProps & { onEdit: (_id: string | number) => void }

const Book:FC<IProps> = ({ _id, title, pageCount, thumbnailUrl, shortDescription, longDescription, status, onEdit }):JSX.Element => {
  return (
    <>
      <div className='book-container'>
        <div className='book-image'>
          <img src={thumbnailUrl} height='200' />
        </div>
        <div className='book-details'>
          <p className='book-title'>{title}</p>
          <p className='book-description'>{shortDescription || longDescription}</p>
          <button className='edit-button' onClick={() => onEdit(_id)}>Edit</button>
        </div>
      </div>
      <style>
        {
          `
            .book-container {
              height: 200px;
              margin-bottom: 20px;
              width: 500px;
              display:flex;
            }

            .book-image {
              background: #262c26
            }

            .book-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
            }

            .book-title {

            }

            .book-description {
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.5em;
              height: 3em;
              overflow: hidden;
              margin: 20px;
              margin-top: 20px;
            }

            p {
              margin: 0px;
              padding: 0px;
            }

            .edit-button {
              background: #1ea94b;
              border:none;
              padding: 10px;
              font-size: 16px;
              cursor: pointer;
            }
          `
        }
      </style>
    </>
    )
}

export default Book
