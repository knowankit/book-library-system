import {
  Link
} from "react-router-dom";

const Navigation = ():JSX.Element => {
  return (
    <>
      <div className='navigation'>
        <Link to="/" className='menu-item'><i className='bx bxs-book'></i>Books</Link>
        <Link to="/add" className='menu-item'><i className='bx bxs-book-add' ></i>Add</Link>
        <Link to="/edit" className='menu-item'><i className='bx bxs-edit-alt'></i>Edit</Link>
      </div>
      <style>
        {
          `
            .navigation {
              height: 80px;
              background: white;
              display:block;
              margin-bottom: 40px;
              -webkit-box-shadow: 0 4px 6px -6px gray;
              -moz-box-shadow: 0 4px 6px -6px gray;
              box-shadow: 0 4px 6px -6px gray;
              display: flex;
              justify-content: center;
              align-items: center;
              position: -webkit-sticky;
              position: sticky;
              top: 0px;
            }

            .bx{
              color: black;
            }

            .menu-item {
              font-size: 20px;
              color: #26262c;
              font-weight: bold;
              margin-right: 10px;
              text-decoration: none;
              padding: 10px;
            }

            .menu-item i {
              margin-right: 10px;
            }

            .menu-item:hover {
              color: #6dd5ed;
            }

            .menu-item:hover i{
              color: #6dd5ed;
            }
          `
        }
      </style>
    </>
  )
}

export default Navigation
