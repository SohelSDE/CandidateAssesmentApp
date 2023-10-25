import React, { useState } from 'react';
import { Button, TextField, Snackbar, Alert, Paper, Typography, Avatar, Dialog, DialogTitle, DialogContent } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './SignInPage.css'; // Import your CSS file
import SignUp from './SignUp'; // Import the SignUp component

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSignUp, setOpenSignUp] = useState(false);

  const signInApi = async () => {
    // Call your authentication API here and handle the response
    try {
      const response = await fetch('your-auth-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, userType } = data;

        // Handle successful sign-in
        setSnackbarMessage(`Successfully signed in as ${userType}`);
        setSnackbarOpen(true);

        // You can store the token in state or a global context for further use
      } else {
        // Handle authentication error
        setSnackbarMessage('Invalid username or password');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSignUpOpen = () => {
    setOpenSignUp(true);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  return (
    <>
      <Paper elevation={3} className="signin-container">
        <Avatar className="signin-avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="signin-title">
          Sign In
        </Typography>
        <form className="signin-form">
          <TextField
            className="signin-input"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username/Email"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="signin-input"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="signin-button"
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signInApi}
          >
            Sign In
          </Button>
        </form>
        <Button color="primary" onClick={handleSignUpOpen} className="signup-link">
          Don't have an account? Sign Up
        </Button>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>

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
};

export default SignInPage;
