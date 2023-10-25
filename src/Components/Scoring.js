import React, { useState } from 'react';
import { TextField, Typography, Container, Grid, Paper } from '@mui/material';

function Scoring() {
  const [scores, setScores] = useState({
    technical: 0,
    communication: 0,
    overall: 0,
  });

  const handleScoreChange = (skill, value) => {
    setScores({
      ...scores,
      [skill]: value,
      overall: calculateOverallScore(),
    });
  };

  const calculateOverallScore = () => {
    const { technical, communication } = scores;
    return (technical + communication) / 2;
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Control Panel */}
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Scoring Control Panel
            </Typography>
            <form>
              <TextField
                label="Technical Score"
                type="number"
                variant="outlined"
                fullWidth
                value={scores.technical}
                onChange={(e) => handleScoreChange('technical', parseInt(e.target.value, 10))}
              />
              <br />
              <TextField
                label="Communication Score"
                type="number"
                variant="outlined"
                fullWidth
                value={scores.communication}
                onChange={(e) => handleScoreChange('communication', parseInt(e.target.value, 10))}
              />
            </form>
          </Paper>
        </Grid>

        {/* Result Panel */}
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Scoring Results
            </Typography>
            <Typography variant="body1">Technical Score: {scores.technical}</Typography>
            <Typography variant="body1">Communication Score: {scores.communication}</Typography>
            <Typography variant="body1">Overall Score: {scores.overall}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Scoring;
