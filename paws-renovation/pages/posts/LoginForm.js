import React, { Component } from 'react';
import '../styles/LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export class LoginForm extends Component {
  static displayName = LoginForm.name;

  render() {
    return (
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
      <div className="login rounded">
        <h2 className='mb-3'>Login Form</h2>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Email Address</label>
            <input type="email" className='form-control' required></input>
            <div className='invalid-feedback'>
                Please Enter Your Email
            </div>
          </div>
          <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className='form-control' required></input>
            <div className='invalid-feedback'>
                Please Enter Your Password
            </div>
          </div>
          <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input'></input>
            <label htmlFor='check' className='form-check-label'>Remember me</label>
          </div>
          <button type='submit' className='btn btn-dark w-100 mt-2'>SIGN IN</button>
        </form>
      </div>
    </div>
  );
  }
}
