import React from 'react';

import { Link } from 'react-router-dom';

import Guest from './Guest';

const Welcome = () => {
  return (
    <Guest>
      <p className="text-indent mb-4">Welcome to <strong className="text-xl display-font">Hogwarts Revisited</strong>, the social network reuniting fans all over the
        world with the beloved magic of the Harry Potter universe.</p>
      <p className="text-indent mb-4">Come join your friends, make new ones, and discuss your favorite book or movie moments or explore your own
        characters as they live in the modern-day setting of Hogwarts and the magical world as a First Year,
        Prefect, Professor, Auror, shopkeeper, and so much more.</p>
      <p className="text-center mb-4 display-font text-2xl"><Link className="font-bold" to="/signup">Sign Up</Link> or <Link className="font-bold" to="/login">Log In</Link></p>
    </Guest>
  );
}

export default Welcome;
