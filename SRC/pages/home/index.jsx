import { Box, Typography } from '@mui/material';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.heading}>
        Muhammad Saqlain's Portfolio
      </Typography>
      <Typography variant="h5" className={styles.subheading}>
        Web Developer & Data Scientist
      </Typography>
      <Typography variant="body1" className={styles.description}>
        Data + Web = Solutions. Python | SQL | React | ML | APIs
      </Typography>
    </Box>
  );
}