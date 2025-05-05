import { TextField } from '@mui/material';
import styles from './CustomInput.module.css';

const CustomInput = ({ 
  label, 
  name, 
  formik, 
  multiline = false, 
  rows = 1,
  type = 'text'
}) => {
  return (
    <div className={styles.inputContainer}>
      <TextField
        className={styles.inputField}
        variant="outlined"
        fullWidth
        id={name}
        name={name}
        label={label}
        type={type}
        multiline={multiline}
        rows={rows}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </div>
  );
};

export default CustomInput;