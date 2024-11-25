import React, {useState} from 'react'
import './LoginPage.css'
import { useNavigate, Link } from 'react-router-dom'

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset Password Attempt:', { email, newPassword });

    navigate('/login')
  }

  return (
    <div className='login-container'>
        <Link className='partyup-logo'>
            PartyUp
        </Link>
        <div className='login-form'>
            <form id='log-form' onSubmit={handleSubmit}>
                <div className='form-title-container'>
                    <h2 className='login-form-title'>Reset Password</h2>
                </div>

                <label htmlFor='username'>Email</label>
                <input type='text' id='username' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' placeholder='Enter your username'/>

                <label htmlFor='password'>New password</label>
                <input type='password' id='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter your password'/>

                <div className='button-container'>
                    <button type='submit' className='login-btn'>Confirm</button>
                </div>
            </form>
            <div className='switch-hyperlink-container'>
                <Link to='/login' className='switch-link'>Back to login page</Link>
            </div>
        </div>
    </div>
  )
}

export default Forgot