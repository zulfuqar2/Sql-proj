import React from 'react'
import './Search.css'

function Search() {
  return (
    <>
    <div className='inputBox'>

        <p className='inp'>Input field</p>
        <input type="text"  placeholder='Search coins' className='incl'/>
        <button className='send'> Search</button>




    </div>
    </>
  )
}

export default Search