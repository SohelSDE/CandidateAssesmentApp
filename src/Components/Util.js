import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NoticeIcon from "@mui/icons-material/Notifications";
import LoginIcon from "@mui/icons-material/Login";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/ContactMail";
import NoticeUploaderIcon from "@mui/icons-material/CloudUpload";
import CredentialManagerIcon from "@mui/icons-material/VpnKey";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const SidebarItem = ({ to, text, icon, isActive }) => (
  <ListItem
    button
    component={Link}
    to={to}
    className={`${
      isActive ? "active-route" : ""
    } group hover:bg-indigo-600 dark:hover:bg-indigo-400`}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export const sidebarIcons = {
  Home: <HomeIcon />,
  Table: <TableChartIcon />,
  Analysis: <AssessmentIcon />,
  Notice: <NoticeIcon />,
  Login: <LoginIcon />,
  About: <AboutIcon />,
  Contact: <ContactIcon />,
  "Notice Uploader": <NoticeUploaderIcon />,
  "Credential Manager": <CredentialManagerIcon />,
};

export function AppToolbar({ darkMode, toggleDarkMode }) {
  return (
    <Toolbar className="flex justify-between">
      <div>
        <Typography variant="h6">Your App Title</Typography>
      </div>
      <div>
        <button
          className={`${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white"
          } p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </Toolbar>
  );
}

export const toggleDrawer = (isDrawerOpen, setIsDrawerOpen) => {
  setIsDrawerOpen(!isDrawerOpen);
};

export const closeDrawerAfterDelay = (isDrawerOpen, setIsDrawerOpen) => {
  if (isDrawerOpen) {
    const timer = setTimeout(() => {
      setIsDrawerOpen(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }
};
