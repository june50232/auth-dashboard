import React from 'react'
import { Outlet } from 'react-router-dom'
import { CiFilter } from "react-icons/ci"
import { BiExport } from "react-icons/bi"

import useQueryParam from '../../utils/useQueryParam'
import defaultQuery, { volumnStatusMenu } from '../../consts/volumn'

import './styles.scss'

export default function Volumn() {
  let [searchParams, setSearchParams] = useQueryParam('query', defaultQuery);
  const searchStatus = searchParams.status

  return (<>
    <menu className='bar header volumn'>
      <div className="nav">
        {Object.keys(volumnStatusMenu).map((status) => {
          const value = status.split('-')[1]
          return (
          <div
            key={value}
            className={`item${searchStatus === value ? ' active' : ''}`}
            onClick={() => setSearchParams({ status: value })}
          >
            <div
              key={value}
            >{volumnStatusMenu[status]}
            </div>
          </div>
        )})}
      </div>
      <div className="nav">
        <button className="item">
          <CiFilter />
          篩選
        </button>
        <button className="item">
          <BiExport />
          匯出
        </button>
      </div>
    </menu>
    <Outlet />
  </>)
}