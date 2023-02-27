import React from 'react'
import pic1 from '../images/pic1.png';

const Signup = () => {
  return (
    <section>
      <div className='main-container'>
        <div className="left-container">
          <div className='centered'>
            <h2 className='form-title'>Sign up</h2>
            <form>
              <div className="input-box">
                <span class="material-symbols-outlined">person</span>
                <input type="text" placeholder='Your Name'/>
              </div>

              <div className="input-box">
              <span class="material-symbols-outlined">mail</span>
                <input type="email" placeholder='Your Email'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">call</span>
                <input type="text" placeholder='Mobile Number'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">collections_bookmark</span>
                <input type="text" placeholder='Your Profession'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">lock</span>
                <input type="password" placeholder='Password'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">enhanced_encryption</span>
                <input type="password" placeholder='Confirm Password'/>
              </div>

              <button className='btn' type="submit">Register</button>

            </form>
          </div>
        </div>
        <div className="right-container">
          <div className="picHolder">
            <img className='doodlePic' src={pic1} alt="doodle" />
          </div>
        </div>

    </div>
    </section>
  )
}

export default Signup