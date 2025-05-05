import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" component="p">
        © {new Date().getFullYear()} M.Saqlain. All rights reserved.
      </Typography>
    </Box>
  );
}