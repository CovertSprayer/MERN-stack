import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import pic1 from '../images/pic1.png';

const Signup = () => {
  const history = useHistory();
  // const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  function changeHandler(e) {
    // console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const postData = async function(e) {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword
      })
    });


    const data = await res.json();

    console.log(res.body);
    if (res.status === 422 || !data) {
      window.alert("Plz fill the field properly");
    }
    else if(res.status === 409){
      window.alert("This Email already exists try Sign In");
      history.push('/login');
    }
    else {
      window.alert("SignUp Successfully");
      history.push('/login');
    }
  }


  return (
    <section>
      <div className='main-container'>
        <div className="left-container">
          <div className='centered'>
            <h2 className='form-title'>Sign up</h2>
            <form method='POST'>
              <div className="input-box">
                <span className="material-symbols-outlined">person</span>
                <input onChange={changeHandler} name="name" type="text" placeholder='Your Name' />
              </div>

              <div className="input-box">
                <span className="material-symbols-outlined">mail</span>
                <input onChange={changeHandler} name="email" type="email" placeholder='Your Email' />
              </div>

              <div className="input-box">
                <span className="material-symbols-outlined">call</span>
                <input onChange={changeHandler} name="phone" type="text" placeholder='Mobile Number' />
              </div>

              <div className="input-box">
                <span className="material-symbols-outlined">collections_bookmark</span>
                <input onChange={changeHandler} name="work" type="text" placeholder='Your Profession' />
              </div>

              <div className="input-box">
                <span className="material-symbols-outlined">lock</span>
                <input onChange={changeHandler} name="password" type="password" placeholder='Password' />
              </div>

              <div className="input-box">
                <span className="material-symbols-outlined">enhanced_encryption</span>
                <input onChange={changeHandler} name="cpassword" type="password" placeholder='Confirm Password' />
              </div>

              <button onClick={postData} className='btn' type="submit">Register</button>

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