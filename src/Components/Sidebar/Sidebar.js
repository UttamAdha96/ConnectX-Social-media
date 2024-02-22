import React from 'react'
import './sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import HomePic from '../Imgs/home-page.png'
import ExplorePic from '../Imgs/explore.png'
import SavedPostPic from '../Imgs/save-instagram.png'
import MessagePic from '../Imgs/chat.png'
import CreatePostPic from '../Imgs/post.png'
import SettingsPic from '../Imgs/application-settings.png'
import LogOutPic from '../Imgs/exit.png'

export const Sidebar = () => {
  const navigate = useNavigate();
  return (<>
  <div className='side-bar'>
    <div className='menu-box'>
      <div className='menu-heading'><h1>Menu</h1></div>
      <div className='items'>
        <div onClick={()=> {navigate('/')}} className='one-item'>
          <div className='menu-icon'><img src={HomePic} alt='..?'/></div>
          <div className='menu-names'>Home</div>
        </div>
        <div className='one-item'><div className='menu-icon'><img src={ExplorePic} alt='..?'/></div><div className='menu-names'> Explore</div></div>
        <div className='one-item'><div className='menu-icon'><img src={SavedPostPic} alt='..?'/></div><div className='menu-names'> My Saved</div></div>
        <div className='one-item'><div className='menu-icon'><img src={MessagePic} alt='..?'/></div><div className='menu-names'> Message</div></div>
        <div className='one-item'><div className='menu-icon'><img src={CreatePostPic} alt='..?'/></div><div className='menu-names'> Create Post</div></div>
      </div>
      
    </div>

    <div className='general-box'>
    <div className='menu-heading'><h1>General</h1></div>
      <div className='items'>
        <div  className='one-item'><div className='menu-icon'><img src={SettingsPic} alt='..?'/></div><div className='menu-names'>Settings</div></div>
        <div className='one-item'><div className='menu-icon'><img src={LogOutPic} alt='..?'/></div><Link to='/login'><div className='menu-names'>Log Out</div></Link></div>
      </div>
    </div>
    
    
  </div>
  
  </>
  )
}
