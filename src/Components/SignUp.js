import React, { useState } from "react";
import {
  Button,
  TextField,
  Snackbar,
  Alert,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./SignInPage.css"; // Import your CSS file

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const signUpApi = async () => {
    // Validate the fields
    if (!validateFields()) {
      return;
    }

    // Call your signup API here and handle the response
    try {
      const response = await fetch("your-signup-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          firstName,
          lastName,
          email,
        }),
      });

      if (response.ok) {
        // Handle successful signup
        setSnackbarMessage("Account created successfully");
        setSnackbarOpen(true);
      } else {
        // Handle signup error
        setSnackbarMessage("Error creating account");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const validateFields = () => {
    // Your validation logic goes here
    // Example validations based on the specified criteria
    if (!/^[A-Z][a-z]*$/.test(username)) {
      setSnackbarMessage("Username must start with a capital letter");
      setSnackbarOpen(true);
      return false;
    }

    if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        password
      )
    ) {
      setSnackbarMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      setSnackbarOpen(true);
      return false;
    }

    if (!/^[A-Z][a-z]*$/.test(firstName)) {
      setSnackbarMessage("First name must start with a capital letter");
      setSnackbarOpen(true);
      return false;
    }

    if (email === "" || !isValidEmail(email)) {
      setSnackbarMessage("Invalid email address");
      setSnackbarOpen(true);
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    // Your email validation logic goes here
    // This is a simple example, you might want to use a library or a more comprehensive check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper elevation={3} className="signup-container">
      <Avatar className="signup-avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" className="signup-title">
        Sign Up
      </Typography>
      <form className="signup-form">
        <TextField
          className="signup-input"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="signup-input"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          className="signup-input"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="firstName"
          label="First Name"
          id="firstName"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className="signup-input"
          variant="outlined"
          margin="normal"
          fullWidth
          name="lastName"
          label="Last Name"
          id="lastName"
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className="signup-input"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="signup-button"
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={signUpApi}
        >
          Sign Up
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default SignUp;
