import React, { useState } from 'react';
import logo from '../../assets/logo.png'

// export const NavBar = () => {
//   return (
//     <div className='flex justify-between mt-4 items-center p20'  >
//       <Typography
//         variant='h4'
//         color={'primary'}
//         className='flex items-center gap-3'
//       >
//         <img src={logo} alt='logo' width={40} />
//         ScriptLeaf
//       </Typography>
      
//       <div className='flex gap-4' >
        
//         <Button variant='outlined' >
//           Recent Views
//         </Button >

//         <Button variant='outlined'>
//           Movies
//         </Button>

//         <Button variant='outlined'>
//           Books
//         </Button>
        
//       </div>
//     </div>


//   );
// };

import {Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigator = useNavigate()
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>Recent Views</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Movies</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Books</MenuItem>
    </Menu>
  );

  const goHome = () => {
    navigator("/")
  }

  const showMovies = () => {
    navigator('/show/movies')
  }

  const showBooks = () => {
    navigator('/show/books')
  }

  return (
    <div className='flex justify-between mt-4 items-center p-4'>
      <Typography variant='h4' color={'primary'} className='flex items-center gap-3'>
        <img src={logo} alt='logo' width={40} />
        ScriptLeaf
      </Typography>
      
      <div className='hidden md:flex gap-4'>
        <Button variant='outlined' onClick={goHome}>Recent Views</Button>
        <Button variant='outlined' onClick={showMovies}>Movies</Button>
        <Button variant='outlined' onClick={showBooks}>Books</Button>
      </div>
      
      <div className='md:hidden'>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
      </div>
      {mobileMenu}
    </div>
  );
};


