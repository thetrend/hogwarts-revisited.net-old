import React from 'react';

import { Link } from 'react-router-dom';

import Guest from './Guest';

const Signup = () => {
  let pageName = 'Sign Up';
  return (
    <Guest>
      <h1 className="text-7xl display-font font-bold text-center mb-5">{pageName}</h1>
      <form className="text-center flex flex-col">
        <div className="flex flex-row mb-5">
        <label htmlFor="email" className="text-left w-2/5">Email:</label>
        <input id="email" type="email" placeholder="your@email.com" className="w-full bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="password" className="text-left w-2/5">Password:</label>
        <input id="password" type="password" placeholder="Password" className="w-full bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
        <div className="flex flex-row mb-5">
        <label htmlFor="password2" className="text-left w-2/5">Confirm:</label>
        <input id="password2" type="password" placeholder="Confirm Password" className="w-full bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
        <p className="text-center text-xs w-3/5 m-auto mb-5">
          By signing up you confirm that you are at least 13 years of age and agree to our&nbsp;
            <Link to="/pages/terms-of-service" className="text-blue-500 hover:underline hover:text-blue-800">Terms of Service</Link> and&nbsp;
            <Link to="/pages/privacy-policy" className="text-blue-500 hover:underline hover:text-blue-800">Privacy Policy</Link>.
        </p>
        <button type="submit" className="mb-5 text-3xl display-font font-bold py-2 px-4 w-2/5 mx-auto bg-blue-500 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500 rounded">{pageName}</button>
        <p className="text-center display-font text-xl">or <Link to="/login" className="font-bold">Log In</Link> &middot; <Link to="/" className="font-bold">Home</Link></p>
      </form>

    </Guest>
  );
}

export default Signup;
