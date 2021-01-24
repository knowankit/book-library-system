
const SelectBookSkeleton = ():JSX.Element => {
  return (
    <>
      <div className='no-book-skeleton'>
          Please select any book to edit
      </div>
      <style>
        {
          `
            .no-book-skeleton {
              height: 250px;
              width: 250px;
              border: 2px dashed gray;
            }
          `
        }
      </style>
    </>
  )
}

export default SelectBookSkeleton
