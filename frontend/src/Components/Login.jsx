import React from 'react'
import './Login.css'
export const Login = () => {

    // const handleChange = (e) =>
    // setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div>
        
           

      {/* <h1>heyyyy</h1> */}
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form action="">
         <h2>Email</h2>
          <input type="email"  placeholder='email' />
         <h2>Password</h2>
          <input type="password"  placeholder='password' />
        </form>
      </div>


      
        
    </div>
  )
}
