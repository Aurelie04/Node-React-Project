import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import validation from './SignUpValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const [values,setValues] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        business: '',
        email: '',
        password: ''
   })
   const navigate = useNavigate();
   const [errors, setErrors] = useState({})
   const handleInput =(e) => {
     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))

   }

   console.log("React handleSubmit triggered");
   console.log("Values being submitted:", values);


   const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
 if (Object.values(validationErrors).every(error => error === "")) {
    axios.post('http://localhost:8081/signup', values)
      .then(res => {
        console.log("Signup successful:", res.data);
        navigate('/');
      })
      .catch(err => {
        console.error("Signup failed:", err);
      });
  } else {
    console.log("Validation failed:", validationErrors);
  }
};
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type='text' placeholder='Enter Name' name='name' 
                onChange={handleInput} className='form-control rounded-0' />
                {errors.name && <span className='text-danger'> {errors.name}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='phoneNumber'><strong>Phone number</strong></label>
                <input type='text' placeholder='Enter Phone Number' name='phoneNumber'
                onChange={handleInput} className='form-control rounded-0' />
                {errors.phoneNumber && <span className='text-danger'> {errors.phoneNumber}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='address'><strong>Address</strong></label>
                <input type='text' placeholder='Enter Address' name='address' 
                onChange={handleInput} className='form-control rounded-0' />
                {errors.address && <span className='text-danger'> {errors.address}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='business'><strong>Business Type</strong></label>
                <input type='text' placeholder='Enter Business Type' name='business' 
                onChange={handleInput} className='form-control rounded-0' />
                {errors.business && <span className='text-danger'> {errors.business}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' name='email'
                onChange={handleInput} className='form-control rounded-0' />
                {errors.email && <span className='text-danger'> {errors.email}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password' 
                 onChange={handleInput} className='form-control rounded-0' />
                 {errors.password && <span className='text-danger'> {errors.password}</span>}
              </div>
              <div>
               <label htmlFor='role'><strong>Role</strong></label>
               <select name='role' onChange={handleInput} className='form-control rounded-0'>
                 <option value="">Select Role</option>
                 <option value="Farmer">Farmer</option>
                 <option value="Buyer">Buyer</option>
                 <option value="Trader">Trader</option>
                 <option value="Financier">Financier</option>
                 <option value="Logistics">Logistics</option>
                 {errors.role && <span className='text-danger'> {errors.role}</span>}
                </select>
              </div>
              <br></br><button type='submit' className='btn btn-success w-100'><strong>Sign up</strong></button>
              <p className='text-center mt-2'>Forgot password?</p>
              <Link to="/" className='btn btn-outline-primary w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
          </div>
        </div>
  )
}

export default Signup