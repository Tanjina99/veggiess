import { useState } from 'react';
import "../styles/components/_login.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin", {
        email,
        password
      })

      const token = response.data.token;

      if (token) {
        localStorage.setItem('myToken', token)
        setTimeout(() => {
        history("/login");
        }, 1000);
      }

    //   console.log('response', response.data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form-container'>
      <div className='form-box'>
      <h2>Sign In</h2>
      <form className='login-group' onSubmit={handleSubmit}>
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
        <button  className="login" type='submit'>Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default Signin;
