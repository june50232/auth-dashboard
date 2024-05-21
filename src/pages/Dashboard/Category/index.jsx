import React from 'react'
import { useNavigate, Link, useMatch, useResolvedPath } from 'react-router-dom'

import categories, { categoryIcons } from '../../../consts/categories'
import SearchInput from '../../../components/SearchInput'
import { useAuth } from '../../../utils/auth'

import './styles.scss'

const Category = ({ 
  isMobile = false, 
  isShow = false, 
  setShow = () => {},
  notification = { volumn: 3 }, 
}) => {
  let auth = useAuth();
  let navigate = useNavigate();
  return (
    <>
      <div className={`category${isShow ? ' active' : ''}`}>
        {isMobile && (<SearchInput/>)}
        {Object.keys(categories).map((category) => {
          const badge = notification[category]
          return (
          <CustomLink 
            key={category}
            className='item'
            to={category === 'index' ? '.' : category}
            disabled={true}
          >
            <div className='name'>
              {categoryIcons[category]}
              {categories[category]}
            </div>
            {badge && <div className='badge'>{badge}</div>}
          </CustomLink>
        )})}
        <div 
          className='item'
          onClick={() => {
            auth.signout(() => navigate("/login"));
          }}
        >登出</div>
      </div>
      {isMobile && <div 
        className={`category-shadow${isShow ? ' active' : ''}`}
        onClick={() => setShow(false)}
      ></div>}
  </>
  )
}

export default Category

const CustomLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        className={`${className}${match ? ' active' : ''}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}