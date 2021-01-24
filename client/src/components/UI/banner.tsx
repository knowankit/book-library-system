const Banner = (): JSX.Element => {
  return (
    <>
    <div className='banner'>
      <h1>Book Library Management</h1>
    </div>
    <style>
      {
        `
          .banner {
            background: linear-gradient(rgba(37,36,36,.45),rgba(255,203,8,.45)),url('bookshelves.jpg') no-repeat 50%;
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
