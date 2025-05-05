import { Box, Typography } from '@mui/material';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.heading}>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" className={styles.subheading}>
        Web Developer & UI Enthusiast
      </Typography>
      <Typography variant="body1" className={styles.description}>
        Creating beautiful and functional web experiences with React and Material-UI
      </Typography>
    </Box>
  );
}