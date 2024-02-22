import React, {useState, useEffect} from 'react'
import './posts.css'
import UserProfile from '../Imgs/user-profile.png'
import CommentIcon from '../Imgs/Comment.png'
import ShareIcon from '../Imgs/share.png'
// import farmpic from '../Imgs/farm.webp'

export const Posts = () => {
  const [expanded, setExpanded] = useState(false);
  const [bio, setBio] = useState("✨️ 3/1/23 ✨️Refreshing the soul with my human diaries ❤️💫🕊");
  const [postContent, setPostContent] = useState(
    {
      name:'uttam',
      place:'Banaras',
      image: require('../Imgs/banaras.jpg'),
      likeCount:'0',
      CommentCount:11,
      isliked:false,
      postID : "banaras",
    }
  )
  const [mainDivHeight, setMainDivHeight] = useState('auto');
  useEffect(() => {
    setMainDivHeight({height:expanded?'fit-content':'2.8rem',overflow:expanded?'visible':'hidden'});
    
  },
  [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const bioStyle = {
    height: expanded ? 'fit-content' : '2.8rem',
    // display: '-webkit-box',
    // WebkitLineClamp: expanded ? 'none' : 2,
    // WebkitBoxOrient: 'vertical',
    overflow: expanded ? 'visible' : 'hidden',
    // textOverflow: 'ellipsis',
  
  };
  const handleLikeClick=() =>{ 
    if(postContent.isliked){
      setPostContent(
        {
         ...postContent,
         likeCount : +postContent.likeCount - 1,
         isliked: !postContent.isliked,
       });
    }
    else{
      setPostContent(
     {
      ...postContent,
      likeCount : +postContent.likeCount + 1,
      isliked: !postContent.isliked,
    });
    }
  }
  return (<>
    <div className='post-box'>
      
    <div className='post-heading'>
      <div className='user-icon'><img src={UserProfile} alt='..?'/></div>
      <div className='post-heading-right'>
        <div className='post-username'>Uttam Adha</div>
        <div className='post-location'>Banaras</div>
      </div>
    </div>

    <div style={{height:mainDivHeight}}  className='post-bio'>
      <div style={bioStyle}>{bio}</div>
      {bio.length > 76 && (
      <button onClick={toggleExpanded} className='see-more-button'>
        {expanded ? '...see less' : '...see more'}
      </button>
      )}
      
    </div>


    <div onDoubleClick={handleLikeClick} className='post-media'>
    <img src={postContent.image} alt='..?'/>

    {/* use double click js function  */}
    </div>


    <div className='post-likes-comments'>
      <div className='likes-count'>{postContent.likeCount}</div>
      <div className='likes'>Likes</div>
      <div className='comments-count'>{postContent.CommentCount}</div>
      <div className='Comments'>Comments</div>
    </div>
    <div className='post-break-line'></div>


    <div className='post-likes-actions'>
      <div onClick={handleLikeClick} className='like-button'><div className='menu-icon'><img src={postContent.isliked ?require('../Imgs/redheart.png') : require('../Imgs/heart.png')} alt='..?'/></div>Like</div>
      <div className='like-button'><div className='menu-icon'><img src={CommentIcon} alt='..?'/></div>Comment</div>
      <div className='like-button'><div className='menu-icon'><img src={ShareIcon} alt='..?'/></div>Share</div>
    </div>

    </div>

    </>
  )
}
