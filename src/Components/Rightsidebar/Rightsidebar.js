import React from 'react'
import './Rightsidebar.css'
import UserProfile from '../Imgs/user-profile.png'

export const Rightsidebar = () => {
  return (<>
  <div className='right-side'>
    <div className='know-person-box'>
      <div className='known-person-heading'><p>You might know</p></div>
      <div className='know-person-list'>
        <div className='person-detail'><div className='user-icon'><img src={UserProfile} alt='..?'/></div><div className='person-detail-username'>Person 1</div></div>
        <div className='person-detail'><div className='user-icon'><img src={UserProfile} alt='..?'/></div><p>Person 2</p></div>  
      </div>
      <div className='see-all'>See all-</div>
    </div>

    <div className='Notification'>
    <div className='known-person-heading'><p>Notifications: </p></div>
      <div className='know-person-list'>
        <div className='person-detail'><div className='user-icon'><img src={UserProfile} alt='..?'/></div><p>Hello world started following you.</p></div>
        <div className='person-detail'><div className='user-icon'><img src={UserProfile} alt='..?'/></div><p>Ashutosh liked you post.</p></div> 
      </div>
    </div>
  </div>
  
  </>
  )
}
