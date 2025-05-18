import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from '../../api/axiosInstance';
import ProjectCard from '../../components/ProjectCard';
import styles from './projects.module.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Projects</h1>
      <Grid container spacing={4} className={styles.gridContainer}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project._id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

