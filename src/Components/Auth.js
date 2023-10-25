import React, { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SignInPage from './SignInPage';
import SignUp from './SignUp';

function Auth() {
  const [openSignIn, setOpenSignIn] = useState(true); // Set to true to show Sign In by default
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleSignInOpen = () => {
    setOpenSignIn(true);
    setOpenSignUp(false); // Close Sign Up if Sign In is opened
  };

  const handleSignInClose = () => {
    setOpenSignIn(false);
  };

  const handleSignUpOpen = () => {
    setOpenSignUp(true);
    setOpenSignIn(false); // Close Sign In if Sign Up is opened
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open sign-in"
        edge="start"
        onClick={handleSignInOpen}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Dialog open={openSignIn} onClose={handleSignInClose}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <SignInPage />
        </DialogContent>
        {/* You can add additional actions or buttons here if needed */}
      </Dialog>

      {/* Button to open the Sign Up dialog */}
      <Button color="inherit" onClick={handleSignUpOpen}>
        Sign Up
      </Button>

      {/* Sign Up Dialog */}
      <Dialog open={openSignUp} onClose={handleSignUpClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <SignUp />
        </DialogContent>
        {/* You can add additional actions or buttons here if needed */}
      </Dialog>
    </>
  );
}

export default Auth;
