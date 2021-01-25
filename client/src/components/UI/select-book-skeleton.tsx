
const SelectBookSkeleton = ():JSX.Element => {
  return (
    <>
      <div className='no-book-skeleton'>
          Please select any book from book listing page to edit
      </div>
      <style>
        {
          `
            .no-book-skeleton {
              height: 100px;
              border: 2px dashed gray;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px;
            }
          `
        }
      </style>
    </>
  )
}

export default SelectBookSkeleton
