import {
  Link
} from "react-router-dom";

const Navigation = ():JSX.Element => {
  return (
    <>
      <div className='navigation'>
        <Link to="/" className='menu-item'>Books</Link>
        <Link to="/add" className='menu-item'>Add</Link>
        <Link to="/edit" className='menu-item'>Edit</Link>
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

            .menu-item {
              font-size: 20px;
              color: black;
              font-weight: bold;
              margin-right: 10px;
              text-decoration: none;
              padding: 10px;
            }
          `
        }
      </style>
    </>
  )
}

export default Navigation
