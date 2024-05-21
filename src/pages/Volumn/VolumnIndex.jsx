import React, { useEffect, useState }  from 'react';

import useQueryParam from '../../utils/useQueryParam'
import defaultQuery from '../../consts/volumn'
import Table from './VolumnTable'
import Pagination from '../../components/Pagination'

import fakeData from './fakeData'

export default function VolumnIndex() {
  let [searchParams, setSearchParams] = useQueryParam('query', defaultQuery);
  const { count: _count, page, status } = searchParams
  const count = Number(_count)
  const [data, setData] = useState(fakeData.generateData(count))

  useEffect(() => {
    // call api through axios
    setData(fakeData.generateData(count))
  }, [count, page, status])

  return (<section className='volumn'>
    <div className='card'>
      <Table data={data} />
      <Pagination 
        totalPage={fakeData.totalPage} 
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  </section>)
}