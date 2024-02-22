import React from 'react'
import './home.css'
import { Posts } from '../Posts/Posts'
import { Sidebar } from '../Sidebar/Sidebar';
import { Rightsidebar } from '../Rightsidebar/Rightsidebar';

export const Home = () => {
  return (<>
  <Sidebar/>
  <div className='homepage'>
  
  <div className='post-container'>
    <Posts/>
    <Posts/>
    <Posts/>
  </div>
  

  </div>
<Rightsidebar/>
  </>
  )
}
