"use client"
import React, { useState } from 'react';
import { Box } from '@radix-ui/themes';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Box className='h-16 flex justify-between items-center px-8 bg-background border-b-4 border-one'>
      <div className='text-one text-lg font-bold'>
        <a href='/'>Sweet Scores</a>
      </div>
      <ul className='text-five flex space-x-4'>
        <li className='hover:text-one'><a href='/underconstruction'>Games</a></li>
        <li className='hover:text-one'><a href='/underconstruction'>Achivements</a></li>
        <li className='hover:text-one'><a href='/underconstruction'>Forms</a></li>
        {isLoggedIn ? (
          <li className='hover:text-one'>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li className='hover:text-one'><a href='/login'>Log In</a></li>
            <li className='hover:text-one'><a href='/sign-up'>Sign Up</a></li>
          </>
        )}
      </ul>
    </Box>
  );
};

export default NavBar;