import { useEffect, useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from '../../api/axiosInstance'; // or use 'axios' directly
import styles from './Education.module.css';

export default function Education() {
  const { setTitle } = usePageTitle();
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    setTitle('Education');

    const fetchEducation = async () => {
      try {
        const res = await axios.get('/api/education');
        setEducationData(res.data);
      } catch (err) {
        console.error('Error fetching education data:', err);
      }
    };

    fetchEducation();
  }, [setTitle]);

  return (
    <div className={styles.container}>
      <h1>Education</h1>
      <TableContainer component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>University</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((edu, index) => (
              <TableRow key={edu._id || index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <TableCell>{edu.degree}</TableCell>
                <TableCell>{edu.university}</TableCell>
                <TableCell>{edu.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
