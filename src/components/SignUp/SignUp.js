import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const navigate = useNavigate();

    const handleEmailBlur =(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordBlur =(e)=>{
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur =(e)=>{
        setConfirmPassword(e.target.value)
    }
    // const handleErrorBlur =(e)=>{
    //     setError(e.target.value)
    // }

    const handleCreateUser=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setError("Your two Passwords did not match !")
            return
        }
        if(password.length < 6){
            setError('Password must be 6 characters or longer!')
            return
        }
        createUserWithEmailAndPassword(email,password)
    }

    if (user){
        navigate('/shop')
    }


    return (
        <div className='form-container'>

           <div>
           <h2 className='form-title'>Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            
          <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
           </div> 
           <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
           </div>
           <div className='input-group'>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
           </div>
           
           <p style={{color:'red'}}>{error}</p>

           <input className='form-submit' type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account ? <Link className='form-link' to='/login'>Login</Link>
          </p>
           </div>

        </div>
    );
};

export default SignUp;