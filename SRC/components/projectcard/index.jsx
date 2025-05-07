import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styles from './projectcard.module.css';

export default function ProjectCard({ project }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
      />
      <CardContent className={styles.cardContent}>
        {/* force the heading color */}
        <Typography 
          gutterBottom 
          variant="h6" 
          sx={{ color: '#f0f0f0 !important' }}
        >
          {project.title}
        </Typography>
        {/* force the body text color */}
        <Typography 
          variant="body2" 
          sx={{ color: 'rgba(240,240,240,0.9) !important' }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}


