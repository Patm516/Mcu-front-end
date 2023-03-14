import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <nav>
        <ul>

          <li>
            <Link to ="/">Home</Link>
          </li>

          <li>
            <Link to ="/gallery">Heroes Gallery List</Link>
          </li>

          <li>
            <Link to ="/newMcu">Create New MCU Character</Link>
          </li>

          <li>
            <Link to ="/updateHero">Update Existing MCU Character</Link>
          </li>

          <li>
            <Link to ="/deleteMcuCharacter">Delete MCU Character</Link>
          </li>

          <li>
            <Link to ="/contact">Contact</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout;