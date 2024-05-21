import React from 'react'

import './styles.scss'

export default function Selector({ selectCount, onChange }) {
  return (
    <select 
      className="select border"
      name="option" 
      value={selectCount || '3'}
      onChange={onChange}
    >
      {['3', '5', '10'].map((num) => <option key={num} value={num}>{num} items</option>)}
    </select>
  )
}