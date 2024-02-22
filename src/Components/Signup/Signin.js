import React from 'react'
import './signup.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginPic from '../Imgs/scroll2.gif'
export default function Signin() {
  const [signupdetails, setSignupDetails] = useState({
    Username:'',
    email:'',
    Password:'',
  });

  const navigate = useNavigate();

  const handleLogin = (e) =>{
    const {name, value} = e.target;
    setSignupDetails({
      ...signupdetails,
      [name]: value,
    });
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    // alert('Data savs
    console.log(signupdetails)
    navigate('/')

  }
  return (
    <>
    <div className='signup-page'>
        <div className='side-img'>
          <img src={LoginPic} alt='..?'/>
        </div>
        {/* this is login form: */}
        <div className='signup-container'>
        
          <div className='signup-form'>
            <form onSubmit={handleloginSubmit}>
              <div className='header'>
               <h2>ConnectX</h2>
              </div>
              <div className='signup-header'>
              <h2>New Register</h2>
              </div>
              {/* <label>Username:</label> */}
              <div className='input-boxes'>
              <input type='text' placeholder='Username' name='Username' value={setSignupDetails.Username} onChange={handleLogin} required/>
              <box-icon name='user' type='solid' ></box-icon>
              </div>

              <div className='input-boxes'>
              <input type='text' placeholder='Email address' name='email' value={setSignupDetails.email} onChange={handleLogin} required/>
              <box-icon name='user' type='solid' ></box-icon>
              </div>
              
              <div className='input-boxes'>
              <input type='password' placeholder='Password' name='Password' value={setSignupDetails.Password} onChange={handleLogin} required/>
              <box-icon name='lock' type='solid' ></box-icon>
              </div>
              <div className='signup-btn'>
              <button>Signup</button>
              </div>
              
              <div className='register-link'>
                <p>Already a member ? </p>
                <Link to='/login'>Login</Link>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </>

  )
}
