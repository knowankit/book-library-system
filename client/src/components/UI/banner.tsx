const Banner = (): JSX.Element => {
  return (
    <>
    <div className='banner'>
      <h1>Library</h1>
    </div>
    <style>
      {
        `
          .banner {
            background: linear-gradient(rgba(20, 30, 48,.6),rgba(36, 59, 85,.9)),url('bookshelves.jpg') no-repeat 50%;
            background-size: cover;
            height: 200px;
          }
        `
      }
    </style>
    </>
  )
}

export default Banner
