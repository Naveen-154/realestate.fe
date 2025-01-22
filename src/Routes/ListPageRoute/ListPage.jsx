import React from 'react'
import Card from '../../Components/Card/Card'
import Filter from '../../Components/Filter/Filter'
import { listData } from '../../library/dummydata'
import '../ListPageRoute/ListPage.scss'
import Map from '../../Components/map/Map'

const ListPage = () => {
  const data =listData
  return (
    <div className='listPage'>
        <div className="listContainer">
          <div className="wrapper">
           <Filter/>
           {data.map(item=>(
            <Card key={item.id} item={item}/>
           ))}
          </div>
        </div>
        <div className="mapContainer">
          <Map items={data}/>
        </div>
    </div>
  )
}

export default ListPage