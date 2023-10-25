import React from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';

function ManualResume() {
  return (
    <div className="resume">
      <Typography variant="h4">Personal Information</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Phone Number" fullWidth margin="normal" />
      <TextField label="Address Pin" fullWidth margin="normal" />
      <TextField label="LinkedIn" fullWidth margin="normal" />

      <Typography variant="h4" style={{ marginTop: 20 }}>
        Skills
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Skill Level</InputLabel>
        <Select>
          <MenuItem value="basic">Basic</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="pro">Pro</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Skill Category</InputLabel>
        <Select>
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="secondary">Secondary</MenuItem>
          <MenuItem value="complementary">Complementary</MenuItem>
          <MenuItem value="softSkill">Soft Skill</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h4" style={{ marginTop: 20 }}>
        Experience
      </Typography>
      <TextField label="Designation" fullWidth margin="normal" />
      <TextField label="Company" fullWidth margin="normal" />
      <TextField label="Projects" fullWidth margin="normal" />
      <TextField label="Years of Experience" fullWidth margin="normal" />
      <TextField label="Last Working Month and Year" fullWidth margin="normal" />

      <Typography variant="h4" style={{ marginTop: 20 }}>
        Availability
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Work Location</InputLabel>
        <Select>
          <MenuItem value="wfh">Work From Home</MenuItem>
          <MenuItem value="wfo">Work From Office</MenuItem>
        </Select>
      </FormControl>

      {/* Add more fields as needed */}
      <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
        Save
      </Button>
    </div>
  );
}

export default ManualResume;
