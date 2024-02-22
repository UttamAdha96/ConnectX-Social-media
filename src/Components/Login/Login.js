import React from 'react'
import "./login.css"
import LoginPic from '../Imgs/scroll2.gif'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import Cookies from 'universal-cookie';
// import axios from "axios"
import { Link, useNavigate} from 'react-router-dom';
export default function Login() {
  const [logindetails, setLogindetails] = useState({
    Username:'',
    Password:'',
  });

  const navigate = useNavigate();

  const handleLogin = (e) =>{
    const {name, value} = e.target;
    setLogindetails({
      ...logindetails,
      [name]: value,
    });
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    // alert('Data savs
    console.log(logindetails)
    navigate('/')
  }
  return (
    <>
  
      <div className='login-page'>
        {/* this is login form: */}
        <div className='login-container'>
        
          <div className='login-form'>
            <form onSubmit={handleloginSubmit}>
              <div className='header'>
                <h2>ConnectX</h2>
              </div>
              <div className='login-header'>
              <h2>Login to your Account</h2>
              </div>
              {/* <label>Username:</label> */}
              <div className='input-boxes'>
              <input type='text' placeholder='Username' name='Username' value={setLogindetails.Username} onChange={handleLogin} required/>
              </div>
              
              {/* <label>Password:</label> */}
              <div className='input-boxes'>
              <input type='password' placeholder='Password' name='Password' value={setLogindetails.Password} onChange={handleLogin} required/>
              </div>
              <div className='login-btn'>
              <button>Login</button>
              </div>
              <div className='remember-me'>
                <Link to='/login'>forgot password ?</Link>
              </div>
              <div className='register-link'>
                <p>Don't have account ?
                <Link to='/Signup'> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <div className='side-img'>
          <img src={LoginPic} alt='..?'/>
        </div>
      </div>
    </>


  )
}
