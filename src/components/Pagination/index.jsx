import React from 'react'

import Selector from '../Selector'

import './styles.scss'

export default function Pagination({ totalPage, searchParams, setSearchParams }) {

  const onPageChange = (page, adjust = 0) => {
    const newPage = Number(page) + adjust
    if (newPage > 0 && newPage <= totalPage) {
      setSearchParams({ page: newPage })
    }
  }

  const onCountChange = ({target: { value }}) => {
    setSearchParams({ count: value })
  }

  return (<div className='pagination'>
    <div>Show rows: <Selector selectCount={searchParams.count} onChange={onCountChange} /></div>
    <div className='bar'>
      <div 
        className='button' 
        onClick={() => onPageChange(searchParams.page, -1)}
        >&#060;</div>
      {[...Array(totalPage).keys()].map((page) => (
        <div 
          key={page} 
          className={`button${searchParams.page == page + 1 ? ' green' : ''}`}
          onClick={() => onPageChange(page + 1)}
        >{page + 1}
        </div>
      ))}
      <div 
        className='button' 
        onClick={() => onPageChange(searchParams.page, +1)}
      >&#062;</div>
    </div>
  </div>)
}