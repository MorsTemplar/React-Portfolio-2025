import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import CustomInput from '../../components/custominput';
import styles from './contact.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
});

export default function Contact() {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema,
    onSubmit: values => console.log(values)
  });

  return (
    <Box className={styles.container}>
      <h1>Contact Me</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <CustomInput
          name="name"
          label="Name"
          formik={formik}
        />
        <CustomInput
          name="email"
          label="Email"
          formik={formik}
        />
        <CustomInput
          name="message"
          label="Message"
          multiline
          rows={4}
          formik={formik}
        />
        <Button
          type="submit"
          variant="contained"
          className={styles.submitButton}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}