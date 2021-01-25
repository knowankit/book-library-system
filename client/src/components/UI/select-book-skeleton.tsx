
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
              width: 100%;
              border: 2px dashed gray;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `
        }
      </style>
    </>
  )
}

export default SelectBookSkeleton
