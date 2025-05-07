import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  School as EducationIcon,
  Work as ProjectsIcon,
  Mail as ContactIcon
} from '@mui/icons-material';
import styles from './sidenav.module.css';

export default function SideNav({ mobileOpen, handleDrawerToggle }) {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <EducationIcon />, path: '/education' },
    { text: 'Projects', icon: <ProjectsIcon />, path: '/projects' },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact' }
  ];

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      className={styles.drawer}
      ModalProps={{ keepMounted: true }}
    >
      <div className={styles.drawerContainer}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}