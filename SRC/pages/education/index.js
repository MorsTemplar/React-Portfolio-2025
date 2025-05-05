import { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from './Education.module.css';

export default function Education() {
    const { setTitle } = usePageTitle();
    useEffect(() => {
      setTitle('Education');
    }, [setTitle]);
  

    const educationData = [
      { degree: 'BSc Artificial Intelligence', university: 'ITU',   year: '2023-2027' },
      { degree: 'A-LEVEL',                 university: 'BCCG',  year: '2020-2022' }
    ];
  

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
              <TableRow key={edu.degree} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
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