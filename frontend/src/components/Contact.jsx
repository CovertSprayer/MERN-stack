import React from 'react'

const Contact = () => {
  return (
    <div className="main-div">
      <div className="outer">
        <div className="row">
          <div className="detail-card">
            <span class="material-symbols-outlined">phone</span>
            <div className="details">
              <h4>Phone</h4>
              <small>+91 9922332939</small>
            </div>
          </div>
          <div className="detail-card">
            <span class="material-symbols-outlined">mail</span>
            <div className="details">
              <h4>Email</h4>
              <small>abcdef1134@xyx.com</small>
            </div>
          </div>
          <div className="detail-card">
            <span class="material-symbols-outlined">map</span>
            <div className="details">
              <h4>Address</h4>
              <small>Delhi, India</small>
            </div>
          </div>
        </div>

        <div className="content-outer">
          <div className="content">
            <h2>Get in Touch</h2>
            <form action="">
            <div className="row">
              <div className='input-box'><input type="text" name="" id="" placeholder='Your Name'/></div>
              <div className='input-box'><input type="text" name="" id="" placeholder='Your Email'/></div>
              <div className='input-box'><input type="text" name="" id="" placeholder='Your Phone'/></div>
              
            </div>

            <div className="text-div">
              <textarea name="content" id="" cols="90" rows="8" placeholder='Message'></textarea>
            </div>
            <button className='btn' type="submit">Send Message</button>

            </form>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact