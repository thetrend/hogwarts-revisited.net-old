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
        <input id="email" type="email" placeholder="your@email.com" className="w-full bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="email" className="text-left w-2/5">Password:</label>
        <input id="password" type="password" placeholder="Password" className="w-full bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
        <p className="text-center mb-5"><Link to="/reset-password">Forgot your password?</Link></p>
        <button type="submit" className="mb-5 text-3xl display-font font-bold py-2 px-4 w-2/5 mx-auto bg-blue-500 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded">{pageName}</button>
        <p className="text-center display-font text-xl">or <Link to="/signup" className="font-bold">Sign Up</Link> &middot; <Link to="/" className="font-bold">Home</Link></p>
      </form>

    </Guest>
  );
}

export default Login;
