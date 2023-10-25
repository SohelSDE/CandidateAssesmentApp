import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

function InterviewDashboard() {
  const [data, setData] = useState({
    clients: [],
    teams: [],
    projects: [],
    interviewSchedules: [],
    recruiters: [],
    vendors: [],
    // Add more tables as needed
  });

  useEffect(() => {
    // Fetch data from SQL tables and update the state
    // Example: fetchClients(), fetchTeams(), etc.
    // You can use fetch or any library like axios to make API requests
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Interview Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Clients List */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Clients
            </Typography>
            <List>
              {data.clients.map((client) => (
                <React.Fragment key={client.clientId}>
                  <ListItem>
                    <ListItemText primary={client.clientName} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Projects List */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Projects
            </Typography>
            <List>
              {data.projects.map((project) => (
                <React.Fragment key={project.projectId}>
                  <ListItem>
                    <ListItemText primary={project.projectName} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Add more sections for other SQL tables */}
      </Grid>
    </Container>
  );
}

export default InterviewDashboard;
