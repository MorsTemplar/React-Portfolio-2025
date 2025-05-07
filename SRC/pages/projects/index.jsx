// src/pages/projects/index.jsx

import { Grid } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import styles from './projects.module.css';

const projects = [
  { id: 1, title: 'Weather App',    description: '…', image: '/images/weather-app.png' },
  { id: 2, title: 'RSS Feed Reader', description: '…', image: '/images/best_rss_apps.jpg' },
  { id: 3, title: 'Text Editor',     description: '…', image: '/images/text-card-editor.jpg' },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Projects</h1>
      <Grid container spacing={4} className={styles.gridContainer}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
