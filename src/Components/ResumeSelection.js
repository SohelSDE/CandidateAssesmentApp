import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadFileSharpIcon from "@mui/icons-material/UploadFileSharp";
import ManualResume from "../SubPackages/ManualResume";
import { LinkedIn } from "@mui/icons-material";

const styles = {
  centerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadResumeButton: {
    marginTop: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  manuallyFillPaper: {
    cursor: "pointer",
    padding: "16px",
    textAlign: "center",
    color: "white",
    background: "#3f51b5",
    "&:hover": {
      background: "#303f9f",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    background: "#2196f3",
    color: "white",
  },
};

export default function ResumeSelection() {
  const [resume, setResume] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setResume(reader.result);
    };
    reader.readAsText(file);
  };

  const analyzeResume = () => {
    // TODO: Implement resume analysis
  };

  const autoFillDetails = () => {
    // TODO: Implement auto-filling of details
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div style={styles.centerContent}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">Upload Your Resume</Typography>
            <Button
              variant="contained"
              component="label"
              style={styles.uploadResumeButton}
            >
              <input type="file" hidden onChange={handleResumeUpload} />
              Upload Resume{" "}
              <UploadFileSharpIcon style={{ marginLeft: "8px" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">Analyze Resume</Typography>
            <Button variant="contained" onClick={analyzeResume}>
              Analyze
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            variant="contained"
            onClick={openDrawer}
            style={styles.manuallyFillPaper}
          >
            <DescriptionIcon style={{ marginRight: "8px" }} />
            <Typography variant="h6">Manually Fill The Resume</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">Auto-Fill With LinkedIn</Typography>
            <Button variant="contained" onClick={autoFillDetails}>
              Auto-Fill <LinkedIn />
            </Button>
          </Paper>
        </Grid>
        {resume && (
          <Grid item xs={12}>
            <Paper>
              <Typography variant="h5">Resume Preview</Typography>
              <TextField
                multiline
                fullWidth
                variant="outlined"
                value={resume}
                rows={10}
              />
            </Paper>
          </Grid>
        )}
      </Grid>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <div>
          <div style={styles.drawerHeader}>
            <Typography variant="h6">Manual Resume</Typography>
            <IconButton onClick={closeDrawer} color="inherit">
              <CloseIcon />
            </IconButton>
          </div>
          <ManualResume />
        </div>
      </Drawer>
    </div>
  );
}
