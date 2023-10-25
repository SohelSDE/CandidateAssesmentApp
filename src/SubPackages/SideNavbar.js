import React from 'react';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import { SidebarItem, sidebarIcons } from '../Components/Util';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom theme with neon black and pink colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Neon Black
    },
    secondary: {
      main: '#ff6ec7', // Neon Pink
    },
  },
});

const SideNavbar = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="drawer-container">
        <List>
          {/* Sidebar items */}
          <SidebarItem to="/" text="Home" icon={sidebarIcons.Home} isActive={location.pathname === '/'} />
       
          <SidebarItem to="/Auth" text="Auth" icon={sidebarIcons.Login} isActive={location.pathname === '/Auth'} />
          <SidebarItem to="/InterviewDashboard" text="Interview Dashboard" icon={sidebarIcons.About} isActive={location.pathname === '/InterviewDashboard'} />
          <SidebarItem
            to="/QuestionManagemen"
            text="Question Managemen"
            icon={sidebarIcons.Contact}
            isActive={location.pathname === '/QuestionManagemen'}
          />
          <SidebarItem
            to="/AuthUploader"
            text="Auth Uploader"
            icon={sidebarIcons['Auth Uploader']}
            isActive={location.pathname === '/AuthUploader'}
          />
          <SidebarItem
            to="/ResumeSelection"
            text="Resume Selection"
            icon={sidebarIcons['Resume Selection']}
            isActive={location.pathname === '/ResumeSelection'}
          />
             <SidebarItem
            to="/Scoring"
            text="Scores"
            icon={sidebarIcons.Notice}
            isActive={location.pathname === '/Scoring'}
          />
        </List>
      </div>
    </ThemeProvider>
  );
};

export default SideNavbar;