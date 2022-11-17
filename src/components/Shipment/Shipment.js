import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)

    const [name,setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [error, setError] = useState('');
    

    const handleNamedBlur =(e)=>{
        setName(e.target.value)
    }
    const handleAddressBlur =(e)=>{
        setAddress(e.target.value)
    }
    const handlePhoneBlur =(e)=>{
        setPhone(e.target.value)
    }
    const handleShipping=(e)=>{
        e.preventDefault()
    
    }

    return (
        <div className='form-container'>

        <div>
        <h2 className='form-title'>Shipping Information</h2>
       <form onSubmit={handleShipping}>
         
       <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input value={user?.email} readOnly type="email" name="email" id="" required/>
        </div> 
       <div className='input-group'>
             <label htmlFor="name">Name</label>
             <input onBlur={handleNamedBlur} type="text" name="name" id="" required/>
        </div> 
        <div className='input-group'>
         <label htmlFor="address">Address</label>
         <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
        </div>
        <div className='input-group'>
         <label htmlFor="phone">Phone Number</label>
         <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
        </div>
        

        <input className='form-submit' type="submit" value="Submit" />
       </form>
       
        </div>

     </div>
    );
};

export default Shipment;