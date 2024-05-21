import React from 'react'
import { CiSearch } from "react-icons/ci"

import './style.scss'

const SearchInput = () => {
  return (
    <div className="item header-search search-input">
      <CiSearch />
      <input 
        type="text" 
        placeholder="Search anything..."
      />
    </div>
  )
}

export default SearchInput