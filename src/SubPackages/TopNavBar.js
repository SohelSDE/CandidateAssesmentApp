import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import LOGO from '../Images/LOGO.png';
import { Announcement, NoteAdd } from '@mui/icons-material';
// ... (imports remain the same)

function TopNavBar() {
  const location = useLocation();

  const linkStyle = {
    textDecoration: 'none',
    marginRight: '20px',
    marginBottom: '10px', // Add margin bottom for spacing
    display: 'flex',
    alignItems: 'center',
    color: '#333', // Adjust color as needed
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <HomeIcon /> },
    { to: '/Auth', label: 'Auth', icon: <VpnKeyIcon /> },
    { to: '/InterviewDashboard', label: 'Interview Dashboard', icon: <NoteAdd /> },
    { to: '/QuestionManagement', label: 'Question Management', icon: <InfoIcon /> },
    { to: '/ResumeSelection', label: 'Resume Selection', icon: <CloudUploadIcon /> },
    { to: '/Auth-uploader', label: 'Auth Uploader', icon: <AccountCircleIcon /> },
    { to: '/Scoring', label: 'Scores', icon: <Announcement /> },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={LOGO}
              alt="Logo"
              style={{
                maxWidth: '150px',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              gutterBottom
              letterSpacing="2px"
              marginLeft="1rem"
              fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}
              style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#333' }}
            >
              CAA
            </Typography>
          </Grid>
        </Grid>

        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row' }}>
          {navLinks.map(({ to, label, icon }, index) => (
            <Link key={index} to={to} className={location.pathname === to ? 'neon-link active' : 'neon-link'} style={linkStyle}>
              {React.cloneElement(icon, { sx: { marginRight: '5px' } })}
              {label}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;
