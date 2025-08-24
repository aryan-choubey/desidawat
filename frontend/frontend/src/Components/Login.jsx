import React from 'react'
import './Login.css'
import loginimg from '../assets/login.jpg'
export const Login = () => {

    
    
  return (
    <div >
        
           

     <div className="body-container">


          <div className="main-container">
           <h1>Welcome Back!</h1>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, amet.</p>

            <form action="login-page" className="login-page">
              <input name="email"  placeholder='Email'/>
              <input  name = "password" type="password"  placeholder='password'/>
              <label htmlFor="forgetpassword">forgetpassword?</label>
              {/* <a href=""className='btn-signup' onClick={handleclick}>Signup</a> */}

              <button>Login</button>
               
            </form>

        </div>

        <div className="login-img">
          <img src={loginimg} alt="" />
        </div>

     </div>


      
        
    </div>
  )
}
