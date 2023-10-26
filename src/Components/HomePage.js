import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';

function HomePage() {
  const videoUrl = 'https://www.youtube.com/watch?v=54eX4wx2je0&list=PL2rFahu9sLJ0pXNXfSiBlwqK4UidLIQWJ&ab_channel=GoogleMapsPlatform   ';
  const imageUrl = 'https://www.example.com/your-image.jpg';

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Platform
      </Typography>

      <Grid container spacing={3}>
        {/* Video Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Watch Our Intro Video
            </Typography>
            <video width="100%" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Paper>
        </Grid>

        {/* Photo Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Explore Our Photo Guide
            </Typography>
            <img src={imageUrl} alt="Guide" style={{ width: '100%', height: 'auto' }} />
          </Paper>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" paragraph>
          Join our platform today and experience a new way of learning and exploring.
        </Typography>
        <Button variant="contained" color="primary">
          Sign Up Now
        </Button>
      </Paper>
    </Container>
  );
}

export default HomePage;
