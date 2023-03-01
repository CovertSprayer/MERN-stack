import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import pic1 from '../images/pic2.png';


const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendData = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 400){
      window.alert('Invalid Credentials');
    }
    else{
      window.alert('Sign in successfully');
      history.push('/');
    }
  }

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
            <form method='POST'>
              <div className="input-box">
              <span class="material-symbols-outlined">mail</span>
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Your Email'/>
              </div>

              <div className="input-box">
                <span class="material-symbols-outlined">lock</span>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
              </div>

              <button onClick={sendData} className='btn' type="submit">Log in</button>

            </form>
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default Login