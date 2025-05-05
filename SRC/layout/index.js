import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Header from '../header';
import SideNav from '../sidenav';
import Footer from '../footer';
import styles from './layout.module.css';

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width:768px)`);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={styles.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <nav>
        <SideNav
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}