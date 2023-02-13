import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operation.contacts';
import { Alert, Button } from '@mui/material';
import { useFormik } from 'formik';
import { validationForm } from './validationForm';
// import { tokenId } from 'utils/http';

export const ContactForm = memo(() => {
  // const { token, user } = useSelector(selectorAuth);
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectorContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationForm,
    onSubmit: values => {
      if (
        stateContacts.items.some(
          el =>
            el.name.toLowerCase().trim() === values.name.toLowerCase().trim()
        )
      )
        return alert(`${values.name} is already in contacts`);
      // if (token && user.email) {
      //   tokenId.set(token);
      // }
      dispatch(addContact(values));
      formik.resetForm();
    },
  });

  return (
    <>
      {formik.errors.name && formik.touched.name ? (
        <Alert severity="error">Error, please enter a valid name value</Alert>
      ) : null}
      {formik.errors.number && formik.touched.number ? (
        <Alert severity="error">Error, please enter a valid number value</Alert>
      ) : null}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <TextField
          required
          id="outlined-required"
          label="Number"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        <Button variant="contained" type="submit" size="medium">
          Add contact
        </Button>
      </Box>
    </>
  );
});
