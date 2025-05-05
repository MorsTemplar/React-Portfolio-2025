import React, { useState } from 'react';
import { AppBar, Toolbar, Avatar, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';

export default function Header({ handleDrawerToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar>
        <IconButton edge="start" onClick={handleDrawerToggle} className={styles.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>
          My Portfolio
        </Typography>
        <Avatar 
          className={styles.avatar}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          src="C:/Users/boyka/OneDrive/Desktop/ITU work/Semester 4/Web Development/Assignment 2/React-Portfolio-2025/public/images/illustration-vectorstyle-drawing.jpg"
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          className={styles.navMenu}
        >
          <MenuItem className={styles.navItem}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}