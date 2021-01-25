
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
              width: 300px;
              border: 2px dashed gray;
            }
          `
        }
      </style>
    </>
  )
}

export default SelectBookSkeleton
