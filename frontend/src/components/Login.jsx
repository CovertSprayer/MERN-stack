import React from 'react'
import pic1 from '../images/pic2.png';


const Login = () => {
  return (
    <section>
      <div className='main-container'>

        <div className="left-container">
          <div className="picHolder">
            <img className='doodlePic' src={pic1} alt="doodle" />
          </div>
        </div>

        <div className="right-container">
          <div className='centered'>
            <h2 className='form-title'>Log In</h2>
            <form>
              <div className="input-box">
              <span class="material-symbols-outlined">mail</span>
                <input type="email" placeholder='Your Email'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">lock</span>
                <input type="password" placeholder='Password'/>
              </div>

              <button className='btn' type="submit">Log in</button>

            </form>
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default Login