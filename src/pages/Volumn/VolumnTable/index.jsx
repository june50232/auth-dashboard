import React, { Fragment, useState, useRef, useEffect } from 'react';
import moment from 'moment';

import Sankey from '../../../components/Sankey';

import { volumnStatus } from '../../../consts/volumn';

import './styles.scss'

export const sankeyOptions = {
  title: '電量'
};

export default function Table({data}) {
  const allContractIds = useRef(null)
  const [selectedContract, setSelectedContract] = useState([])
  const [isSelectAll, setSelectAll] = useState(false)

  useEffect(() => {
    allContractIds.current = data.map(({id}) => id)
  }, [data])

  return (
    <div className="responsive">
      <table className="table-all hoverable">
        <thead>
        <tr className="th-bg">
          <th>
            <Checkbox 
              checked={isSelectAll}
              onClick={() => {
                const newSelectAll = !isSelectAll
                setSelectedContract(newSelectAll ? allContractIds.current : [])
                setSelectAll(newSelectAll)
              }}
            />
          </th>
          <th>契約單號</th>
          <th>案廠名稱</th>
          <th>起算時間</th>
          <th>狀態</th>
          <th>率</th>
          <th>RE</th>
          <th>...</th>
        </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, time, status, rest, total, dash, dashTotal, lightPerc, windPerc, dashPerc }) => {
            const isChecked = selectedContract.indexOf(id) > -1
            const sankeyData = [
              ["From", "To", "轉供比例"],
              ["光", "廠", lightPerc],
              ["風", "廠", windPerc],
              ["灰", "廠", dashPerc],
            ];
            return (
              <Fragment key={id}>
                <tr>
                  <td>
                    <Checkbox 
                      checked={isChecked}
                      onClick={() => {
                        const isChecked = !(selectedContract.indexOf(id) > -1)
                        const newSelects = isChecked ? selectedContract.concat([id]) : selectedContract.filter((o) => o !== id)
                        setSelectedContract(newSelects)
                        setSelectAll(newSelects.length === allContractIds.current.length)
                      }}
                    />
                  </td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{time ? moment(time).format('YYYY/MM/DD') : '--'}</td>
                  <td>{volumnStatus[status]}</td>
                  <td>{((total - rest) / rest).toFixed(1)}%</td>
                  <td>{((dashTotal - dash) / dash).toFixed(1)}%</td>
                  <td>...</td>
                </tr>
                {isChecked && <tr className='chart'>
                  <td colSpan='8'>
                    <div className='container'>
                      <Sankey data={sankeyData} options={sankeyOptions}/>
                    </div>
                  </td>
                </tr>}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const Checkbox = ({checked, ...props}) => (
  <div className={`checkbox${checked ? ' checked' : ''}`} {...props} />
)