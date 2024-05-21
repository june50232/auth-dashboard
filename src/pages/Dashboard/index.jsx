import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { 
  IoIosNotificationsOutline, 
  IoIosArrowDown, 
} from 'react-icons/io'
import { GiElectric } from "react-icons/gi"
import { Outlet, Link } from 'react-router-dom'

import categories from '../../consts/categories'
import SearchInput from '../../components/SearchInput'

import Category from './Category'
import './styles.scss'

const Dashboard = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false)

  return <IconContext.Provider value={{ className: 'icon' }}>
  <>
    <aside id='sidebar'>
      <div className='bar'>
        <DashboardName />
      </div>
      <Category />
    </aside>
    <main id='main'>
      <Category 
        isMobile 
        isShow={isShowMobileMenu} 
        setShow={setShowMobileMenu}
      />
      <div className='bar header'>
        <div className='nav'>
          <DashboardName isMobile />
          <div className='item'>
            <DashboardTitle />
          </div>
        </div>
        <div className="nav">
          <SearchInput />
          <Link className="item notification" to='./volumn'>
            <IoIosNotificationsOutline />
            <span className="badge" />
          </Link>
          <div className="item profile" onClick={() => setShowMobileMenu(!isShowMobileMenu)}>
            <div 
              style={{ backgroundImage: 'url("https://cdn.oneesports.gg/cdn-data/2024/02/Avatar_Netflix_LiveAction_PrincessYue_Actress_CloseUp.jpg")'}} 
              className="avatar" 
            />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  </>
  </IconContext.Provider>
}

export default Dashboard

const DashboardName = ({ isMobile = false }) => (
  <>
    <div className={`item dashboard-name ${isMobile ? 'isMobile' : 'notMobile'}`}>
      <div className='logo'>
        <GiElectric />
      </div>
      <h2>服務</h2>
    </div>
  </>
)

const DashboardTitle = () => {
  const pathname = window.location.pathname.split('/')
  const isIndex = pathname.length === 2

  return (<h2>{isIndex ? categories.index : categories[pathname[2]]}</h2>)
}