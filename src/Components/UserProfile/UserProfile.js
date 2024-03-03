import React,{useState} from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import './userprofile.css'

function UserProfile() {
  const [userprofile, setUserProfile] = useState(
    {
      name:'Uttam Adha',
      banneIimage: require('../Imgs/panchachuli-base-camp-trek.jpg'),
      userBio:'May the road rise up to meet you. May the wind be always at your back.  May the sun shine warm upon your face;❤️🕊',
      userPic: require('../Imgs/userpic.jpg'),
      isFolloweded:false,
      userPhotos: require('../Imgs/banaras.jpg'),
      
    }
  )
  // const [postimages, setPostImages] = useState({

  // })
  const [followbutton, setFollowButton] = useState(
    {
      Follow:'Follow',
      NotFollow:'Following'
    }
  )
  const handleStopFollowing= () =>{
    setUserProfile(
      {
        ...userprofile,
        isFolloweded: ! userprofile.isFolloweded,
      });
  }
  return (<>
  <Sidebar/>
  <div className='user-profile-container'>

    
    <div className='profile-box'>
      <div className='profile-user-info'>
        <div className='upper-banner'>
          <img src={userprofile.banneIimage} alt='..?'/>
        </div>
        <div className='user-info'>
          <div className='user-info-1'>
            <div className='user-profile-pic'>
              <img src={userprofile.userPic} alt='..?'/>
            </div>
            <div className='user-profile-bio'>
              <div className='user-name'>{userprofile.name}</div>
              <div className='user-bio'>{userprofile.userBio}</div>
            </div>
          </div>
          <div className='user-line-break'></div>
          <div className='user-info-2'>
            <div className='follow-following'>
              <div className='follow-following-Count'><div className='follow-following-number'>6</div>Posts</div>
              <div className='follow-following-Count'><div className='follow-following-number'>20</div>Followers</div>
              <div className='follow-following-Count'><div className='follow-following-number'>50</div>Following</div>
            </div>
            <div className='Follow-button'>
              <button onClick={handleStopFollowing}> {userprofile.isFolloweded? followbutton.NotFollow : followbutton.Follow}</button>
              <button className='Edit-Button' >Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-user-photos'>
        <img className='user-personal-photos' src= {userprofile.userPhotos} alt='..?'/>
        <img className='user-personal-photos' src= {userprofile.userPhotos} alt='..?'/>
        <img className='user-personal-photos' src= {userprofile.userPhotos} alt='..?'/>
        <img className='user-personal-photos' src= {userprofile.userPhotos} alt='..?'/>
        <img className='user-personal-photos' src= {userprofile.userPhotos} alt='..?'/>
      </div>
    </div>
    
  </div>
  </>
  )
}

export default UserProfile