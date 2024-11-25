import React, {useState} from 'react'
import './LoginPage.css'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessages, setErrorMessages] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = ''

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&_-])[A-Za-z\d@.#$!%*?&]{8,15}$/
    if(!regex.test(password)){
        errors = 'Password must be 8-15 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.'
    }else if(password != confirmPassword){
        errors = 'Password confirmation does not match.'
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors = 'Please enter a valid email address.';
    }

    if(!/^[a-zA-Z0-9]{3,}$/.test(username)) {
        errors =
          'Username must be at least 3 characters long and contain only letters and numbers.';
    }

    if(errors) {
        setErrorMessages(errors);
    }else {
        setErrorMessages('');
        console.log('Registration successful:', { username, email, password });
        alert('Registration successful!');
        navigate('/home'); // Redirect to home page
    }
  }

  return (
    <div className='login-container'>
        <Link className='partyup-logo'>
            PartyUp
        </Link>
        <div className='register-form'>
            <form id='reg-form' onSubmit={handleSubmit}>
                <div className='form-title-container'>
                    <h2 className='register-form-title'>Create an Account</h2>
                </div>

                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' placeholder='Enter your username' required/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter your email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/>

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat your password" required/>

                {errorMessages && (
                    <div id='errorMessages' style={{color: 'red'}}>
                        {errorMessages}
                    </div>
                )}

                <div className='button-container'>
                    <button type='submit' className='login-btn'>
                        Register
                    </button>
                </div>
            </form>
            <div className='switch-hyperlink-container'>
                <a href='/login' className='switch-link'>
                Or click here to Login
                </a>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage