import { Grid } from '@mui/material';
import ProjectCard from '../../components/projectcard';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A React app fetching live weather via the OpenWeatherMap API, with dynamic backgrounds and responsive design.',
    image: "C:\Users\boyka\OneDrive\Desktop\ITU work\Semester 4\Web Development\Assignment 2\React-Portfolio-2025\SRC\assets\images\weather-app.png",
  },
  {
    id: 2,
    title: 'RSS Feed Reader',
    description: 'A Bootstrap-powered feed reader that lets users upload house images and categorize them; built with React and Node.js.',
    image: "C:\Users\boyka\OneDrive\Desktop\ITU work\Semester 4\Web Development\Assignment 2\React-Portfolio-2025\SRC\assets\images\best_rss_apps.jpg",
  },
  {
    id: 3,
    title: 'Text Editor',
    description: 'A rich-text editor built in React using Draft.js, featuring formatting controls, auto-save, and export to Markdown.',
    image: "C:\Users\boyka\OneDrive\Desktop\ITU work\Semester 4\Web Development\Assignment 2\React-Portfolio-2025\SRC\assets\images\text-card-editor.jpg",
  },
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
