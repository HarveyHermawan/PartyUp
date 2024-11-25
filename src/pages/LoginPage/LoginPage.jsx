import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Login attempt with: ', {username, password})

    navigate('/home')
  }

  return (
    <div className='login-container'>
        <Link className='partyup-logo'>
            PartyUp
        </Link>
        <div className='login-form'>
            <form id='log-form' onSubmit={handleSubmit}>
                <div className='form-title-container'>
                    <h2 className='login-form-title'>Sign In</h2>
                </div>

                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' placeholder='Enter your username'/>

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>

                <Link to='/forget' className='forgot-password'>Forgot password?</Link>

                <div className='button-container'>
                    <button type='submit' className='login-btn'>Login</button>
                </div>
            </form>
            <div className='switch-hyperlink-container'>
                <Link to='/register' className='switch-link'>Or click here to register</Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage