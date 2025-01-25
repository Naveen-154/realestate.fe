import React from 'react'
import '../List/List.scss'
import Card from'../Card/Card'
import {listData} from '../../library/dummydata'

const List = () => {
  return (
    <div className='list'>
        {listData.map(item=>(<Card Key={item.id}item={item}/>))}
    </div>
  )
}

export default List