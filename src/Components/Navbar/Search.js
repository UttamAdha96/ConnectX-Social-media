import React, { useEffect, useState } from 'react'
import './Search.css'

function Search({hindingsearch}) {

  const [search, setSearch] = useState("")
  useEffect(() =>{
    if(!hindingsearch){
      setSearch("")
    }
    console.log('jai');
  },[hindingsearch])
  return (<>
    <div id='searching-box' className= {hindingsearch ? 'search-box': 'search-hide'}>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='searching-testing' type='text' placeholder='Search' />
    </div>
    
    </>
  )
}

export default Search