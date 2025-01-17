import React, { useState } from 'react'
import '../SearchbarComponents/Searchbar.scss'
import search from '../../assets/images/search.png'
const types =['buy','rent'];
const Searchbar = () => {
  const [query,setQuery]=useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  });
  const switchType=(val)=>{
setQuery(prev=>({...prev,type:val}));
  };
  return (
    <div className='searchbar'>
      <div className='type'>
        {types.map((type)=>(
        <button key={type} onClick={()=>switchType(type)} className={query.type === type ? "active" :""}>
          {type}
        </button>

        ))}

      </div>
      <form>
        <input type="text" name='location'placeholder='City Location' />
        <input 
          type="text" 
          name='minPrice' 
          min={0} 
          max={10000000}
          placeholder='Min Price' 
        />
        <input 
          type="text" 
          name='maxPrice'
          min={0} 
          max={10000000} 
          placeholder='Max Price'
        />
        <button>
          <img className='image'src={search} alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar