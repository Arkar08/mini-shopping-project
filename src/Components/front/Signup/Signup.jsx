import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <div className='sign-container'>
      <h2 className='shop'>Shopping</h2>
      <div className='input-tag'>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name='name'/>
        </div>
        <div className="name">
            <label htmlFor="email">Email</label>
            <input type="text" name='email' />
        </div>
        <button className='sign'>Sign up</button>
      </div>
    </div>
  )
}

export default Signup;