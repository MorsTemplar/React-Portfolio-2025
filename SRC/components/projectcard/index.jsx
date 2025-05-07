// src/components/ProjectCard/index.jsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './projectcard.module.css';  // your card-specific styles

export default function ProjectCard({ project }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/default.png';
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:       PropTypes.string.isRequired,
  }).isRequired,
};
