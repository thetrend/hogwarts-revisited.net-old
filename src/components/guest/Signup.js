import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Guest from './Guest';

const Signup = () => {
  let pageName = 'Sign Up';

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  });

  const { email, username, password, password2 } = formData;

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <Guest>
      <h1 className="text-7xl display-font font-bold text-center mb-5">{pageName}</h1>
      <form className="text-center flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-row mb-5">
        <label htmlFor="email" className="text-left w-2/5">Email:</label>
        <input name="email" id="email" type="email" placeholder="your@email.com" className="guest-input" onChange={updateFormData} />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="username" className="text-left w-2/5">Username:</label>
        <input name="username" id="username" type="text" placeholder="Username" className="guest-input" onChange={updateFormData} />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="password" className="text-left w-2/5">Password:</label>
        <input name="password" id="password" type="password" placeholder="Password" className="guest-input" onChange={updateFormData} />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="password2" className="text-left w-2/5">Confirm:</label>
        <input name="password2" id="password2" type="password" placeholder="Confirm Password" className="guest-input" onChange={updateFormData} />
        </div>
        <p className="text-center text-xs w-3/5 m-auto mb-5">
          By signing up you confirm that you are at least 13 years of age and agree to our&nbsp;
            <Link to="/pages/terms-of-service" className="text-blue-500 hover:underline hover:text-blue-800">Terms of Service</Link> and&nbsp;
            <Link to="/pages/privacy-policy" className="text-blue-500 hover:underline hover:text-blue-800">Privacy Policy</Link>.
        </p>
        <button type="submit" className="guest-button">{pageName}</button>
        <p className="text-center display-font text-xl">or <Link to="/login" className="font-bold">Log In</Link> &middot; <Link to="/" className="font-bold">Home</Link></p>
      </form>

    </Guest>
  );
}

export default Signup;
