import React from 'react'
import { Link } from 'react-router'
import Sidebar from 'components/Sidebar'

const MainLayout = ({ children }) => (
  <div className="flexbox-container">
    <Sidebar>
      <div className="sidebar-logo">
        Time Tracker
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <Link to="/" className="sidebar-menu-item-link" activeClassName="mod-active" onlyActiveOnIndex={true}>
            <span>Timer</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/projects" className="sidebar-menu-item-link" activeClassName="mod-active">
            <span>Projets</span>
          </Link>
        </div>
      </div>
    </Sidebar>
    {children}
  </div>
)

export default MainLayout