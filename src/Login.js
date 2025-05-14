import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import validation from './LoginValidation';

function Login() {
   const [values,setValues] = useState({
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
        <h2>Sign In</h2>
        <form action='' onSubmit={handleSubmit}>
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
          <button type='submit' className='btn btn-success w-100'><strong>Login</strong></button>
          <p className='text-center mt-2'>Forgot password?</p>
          <Link to="/signup" className='btn btn-outline-primary w-100 bg-light rounded-0 text-decoration-none'>Create an Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

