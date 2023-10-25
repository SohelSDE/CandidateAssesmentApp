import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Grid container component="footer" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#52ab98', padding: '2rem' }}>
      <Grid item container xs={12} md={6} justifyContent="center" alignItems="center" textAlign="center">
        <Typography variant="body1" color="whitesmoke" mb={1}>
          Follow us on social media:
        </Typography>
        <IconButton color="primary" aria-label="Facebook" sx={{ mr: 1 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Twitter" sx={{ mr: 1 }}>
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="body1" color="whitesmoke">
          © {new Date().getFullYear()} TechStar Software Development India Pvt Ltd.,. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h5" color="whitesmoke" mt={2}>
          Our Address:
        </Typography>
        <Typography>209 State Highway 121 Bypass Suite # 36
Lewisville, TX 75067</Typography>
        <Typography> B block,4th Floor,

Featherlite - The Address,

Survey No. 203/10B, 200 feet MMRD Road,

Zamin Pallavaram,

Chennai - 600 044.</Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h5" color="whitesmoke" mt={2}>
          Phone Number:
        </Typography>
        <Typography color="blue">+91 9609436103</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;