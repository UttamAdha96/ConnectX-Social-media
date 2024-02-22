import React, { useState } from 'react'
import './Navbar.css'
import SearchIcon from '../Imgs/find.png'
import {useNavigate } from 'react-router-dom'
import Profile from '../Imgs/user-profile.png'
import Search from './Search'

export const Navbar = () => {
  const [hideSearch, setHideSearch] = useState(false)
  const navigate = useNavigate();

  const handleSearch = () =>{
    setHideSearch(!hideSearch)
  }
  const handleOpenUserProfile = () =>{
    navigate('/Userprofile')
  }
  const handleHindingSearch = (e) =>{
    const testSearch = document.querySelector('.searching-testing');
    const searchingPictarget= document.querySelector('#searching-pic');
    if((e.target != testSearch && e.target != searchingPictarget) ){
      // const targetinginput = document.querySelector('#searching-box')
      // targetinginput.classList.replace("search-box","search-hide")
      
      setHideSearch(!hideSearch)
    }
  }
  return (
    <div onClick={handleHindingSearch} className='navbar'>
        <div className='left'>
            <h2>ConnectX</h2>
            <img id='searching-pic' onClick={handleSearch} src= {SearchIcon} alt='..?'/>
        </div>

        <div className='right'>
            <div className='user-name'>Uttam Adha</div>
            <img onClick={handleOpenUserProfile} src= {Profile} alt='..?'/>
        </div>
        <Search hindingsearch={hideSearch}/>
    </div>
  )
}
