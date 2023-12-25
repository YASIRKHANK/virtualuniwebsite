

import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');


  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  

  return (
    <div style={{ width: '500px', height:'350px', marginTop: '30px', padding: '20px', border: '2px solid green', borderRadius: '5px', marginLeft:'40px' }}>
      <h2 className='bg-green-400 py-2 px-2 mb-2'>Sign Up</h2>
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

        <div style={{ marginBottom: '15px' }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={Confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: '100%', padding: '4px', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <button
            type="button"
            onClick={handleSignIn}
            style={{ width:'100px', padding: '10px', borderRadius: '3px',  backgroundColor: 'blue', color: '#fff' }}
          >
            Sign Up
          </button>
        </div>
    
      </form>
    </div>
  );
};

export default SignInForm;
