import React from 'react'
import { Link } from 'react-router'
import Sidebar from 'components/Sidebar'

const MainLayout = ({ children }) => (
  <div>
    <Sidebar>
      <ul>
        <li>
          <Link to="/">
            Timer
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projets
          </Link>
        </li>
      </ul>
    </Sidebar>
    {children}
  </div>
)

export default MainLayout