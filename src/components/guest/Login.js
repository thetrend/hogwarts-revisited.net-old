import React from 'react';

import { Link } from 'react-router-dom';

import Guest from './Guest';

const Login = () => {
  let pageName = 'Log In';
  return (
    <Guest>
      <h1 className="text-7xl display-font font-bold text-center mb-5">{pageName}</h1>
      <form className="text-center flex flex-col">
        <div className="flex flex-row mb-5">
        <label htmlFor="email" className="text-left w-2/5">Email:</label>
        <input id="email" type="email" placeholder="your@email.com" className="guest-input" />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="email" className="text-left w-2/5">Password:</label>
        <input id="password" type="password" placeholder="Password" className="guest-input" />
        </div>
        <p className="text-center mb-5"><Link to="/reset-password">Forgot your password?</Link></p>
        <button type="submit" className="guest-button">{pageName}</button>
        <p className="text-center display-font text-xl">or <Link to="/signup" className="font-bold">Sign Up</Link> &middot; <Link to="/" className="font-bold">Home</Link></p>
      </form>
    </Guest>
  );
}

export default Login;
