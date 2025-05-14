import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import validation from './SignUpValidation';

function Signup() {

    const [values,setValues] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        business: '',
        email: '',
        password: ''
   })
   const [errors, setErrors] = useState({})
   const handleInput =(e) => {
     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))

   }

   const handleSubmit = (Event) => {
    Event.preventDefault();
    setErrors(validation(values));
    

   }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form action='' onSubmit={handleSubmit}>
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
              <button type='submit' className='btn btn-success w-100'><strong>Sign up</strong></button>
              <p className='text-center mt-2'>Forgot password?</p>
              <Link to="/" className='btn btn-outline-primary w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
          </div>
        </div>
  )
}

export default Signup