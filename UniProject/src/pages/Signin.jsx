import React, { useState } from 'react';
import img1 from "../images/hec.jpg";

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Open a new window and render the data
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
    <div style="margin-top: 8px; margin-left: 10px;">
            <div style="background-color: #007bff; color: #fff; font-weight: bold; font-size: 2xl; padding: 10px;">
          REGISTRATION FOR CENTRALIZED TEST
        </div>
  
        <div style="background-color: #fff; padding: 8px; margin-top: 8px; border: 1px solid #000;">
          <img src="${img1}" alt="HEC Logo" style="display: block; margin: auto; margin-bottom: 5px; max-width: 100%;" />
  
          <hr style="border: 1px solid #000; margin-top: 5px;" />
  
          <div style="color: #000; margin-top: 4px;">
            <div style="font-weight: bold;">
              <p>Description:</p>
              <p style="text-align: justify;">
                The Higher Education Commission (HEC) in collaboration with
                Special Investment Facilitation Council (SIFC), Ministry of IT &
                Telecom (MoITT), Pakistan Software Export Board (PSEB), Pakistan
                IT Industry Association (P@SHA), and National Computing Education
                Accreditation Council (NCEAC) is conducting a Centralized Test for
                the students of 7th Semester of CS & Related Disciplines through
                Virtual University Platform. This is part of an academia-industry
                co-opt program to facilitate the placement of talented IT students
                in IT industry to acquire hands-on experience on latest
                technologies for better job opportunities in the local and
                international market.
              </p>
            </div>
  
            <div style="font-weight: bold; margin-top: 4px;">
              <p>Eligibility:</p>
              <p>
                Students who are currently enrolled in 7th Semester of BS/BE
                Computing or related disciplines.
              </p>
            </div>
  
            <div style="font-weight: bold; margin-top: 4px;">
              <p>Registration Process:</p>
              <ol style="list-style-type: decimal; padding-left: 20px;">
                <li>Student application submission through this portal.</li>
                <li>
                  Verification of registration details by the concerned Focal
                  Person of each university (by Focal Person).
                </li>
                <li>
                  Confirmation / Test details shall be forwarded by Virtual
                  University to the eligible candidates (by Virtual University).
                </li>
              </ol>
            </div>
        
          </div>
        </div>
      </div>
    `);
  };

  const handleForgotPassword = () => {
    console.log('Forgot your password?');
  };

  return (
    <div style={{ width: '500px', marginTop: '30px', padding: '20px', border: '2px solid green', borderRadius: '5px', marginLeft: '40px' }}>
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
        <div className='flex justify-between' >
          <div style={{ marginBottom: '15px' }}>
            <button
              type="button"
              onClick={handleSignIn}
              style={{ width: '100px', padding: '5px', borderRadius: '3px', backgroundColor: 'blue', color: '#fff' }}
            >
              Login
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleForgotPassword}
              style={{ padding: '8px', backgroundColor: '#fff' }}
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



