import React from 'react'
import '../components/Home.css'
import Search from './Search/Search'
import Advanced from './filterpan/Advanced'

function HomePage() {

    
  return (
    <>
    <h1 className='header'>Homepage</h1>

    <Search/>
    <div className='Advance'  ><Advanced/></div>
    
    </>
  )
}

export default HomePage