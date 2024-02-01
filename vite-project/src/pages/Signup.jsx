import React, { useState } from 'react';
import '../styles/components/_login.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpsend, setisOtpsend] = useState(false);
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signup", {
        name,
        email,
        password
      });

      if (response.data.isOtpSend) {
        setisOtpsend(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/verifyotp", {
        otp,
        email
      });

      if (response.data.success) {
        alert("Register Successfully");
        setisOtpsend(false);
        navigate('/dashboard');
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form-container'>
      {isOtpsend ? (
        <div className='form-box'>
          <h2>Verify OTP</h2>
          <form className='login-group' onSubmit={handleOtp}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Enter OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Send & Verify</button>
          </form>
        </div>
      ) : (
        <div className='form-box'>
          <h2>Sign up</h2>
          <form className='login-group' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button  className="login" type='submit'>Sign up</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
