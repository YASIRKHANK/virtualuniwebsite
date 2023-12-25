

import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot your password?');
  };

  return (
    <div style={{ width: '500px', height:'300px', marginTop: '30px', padding: '20px', border: '2px solid green', borderRadius: '5px', marginLeft:'40px' }}>
      <h2 className='bg-green-400 py-2 px-2 mb-2'>Sign In</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '4px', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '4px', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div className='flex justify-between'>
        <div style={{ marginBottom: '15px' }}>
          <button
            type="button"
            onClick={handleSignIn}
            style={{ width:'100px', padding: '5px', borderRadius: '3px',  backgroundColor: 'blue', color: '#fff' }}
          >
            Login
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{ padding: '8px',  backgroundColor: '#fff' }}
          >
            Forgot your password?
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
