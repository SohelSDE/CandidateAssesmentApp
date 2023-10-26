import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Drawer, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { closeDrawerAfterDelay, toggleDrawer } from './Util';
import TopNavBar from '../SubPackages/TopNavBar';
import SideNavbar from '../SubPackages/SideNavbar';
import HomePage from './HomePage';
import Auth from './Auth';
import InterviewDashboard from './InterviewDashboard';
import Scoring from './Scoring';
import Footer from '../SubPackages/Footer';
import LOGO from '../Images/LOGO.png'
import ResumeSelection from './ResumeSelection';
import InterviewQuestion from './InterviewQuestion';
import CrudApp from './CrudApp';
// import ResumeSelection from './ResumeSelection';


function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    closeDrawerAfterDelay(isDrawerOpen, setIsDrawerOpen);
  }, [isDrawerOpen]);



  const isLargeScreen = window.innerWidth >= 768; // Adjust the breakpoint as needed

  return (
    <div>
      {isLargeScreen ? ( 
        <TopNavBar/>
      ) : (
        <div>
          <Grid padding={2}>
          <MenuIcon onClick={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)} style={{ cursor: 'pointer' }} className="neon-top-bar" />
          <Typography className="neon-text">
            MENU
          </Typography>
          </Grid>
          <Grid container alignItems="center">
          <Grid item>
            <img
              src={LOGO}
              alt="Logo"
              style={{
                maxWidth: '150px', // Adjust the maxWidth as needed
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
              fontSize={{ xs: '2.8rem', sm: '2rem', md: '2.5rem' }}
              className="neon-text"
             >
              CANDIDATE ASSESMENT APP
            </Typography>
          </Grid>
        </Grid>
          <Drawer
            className="drawer"
            variant="temporary"
            open={isDrawerOpen}
            onClose={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)}
            classes={{
              paper: 'drawer-paper',
            }}
          >
            <SideNavbar/>
          </Drawer>
        </div>
      )}
      <main className="content p-5">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/InterviewDashboard" element={<InterviewDashboard/>} />
          <Route path="/QuestionManagement" element={<InterviewQuestion/>} />
          <Route path="/ResumeSelection" element={<ResumeSelection/>} />
          <Route path="/Scoring" element={<Scoring/>} />
          <Route path="/CrudApp" element={<CrudApp/>} />

        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;