import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
// import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAuth, selectorContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operation.contacts';
import { Button } from '@mui/material';
import { tokenId } from 'http';

export const ContactForm = memo(() => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectorContacts);
  const { token, user } = useSelector(selectorAuth);

  const addContacts = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (
      stateContacts.items.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    )
      return alert(`${name} is already in contacts`);
    if (token && user.email) {
      tokenId.set(token);
    }
    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        onSubmit={addContacts}
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          defaultValue=" "
          // value={name}
          // onChange={event => {
          //   setName(event.target.value);
          // }}
        />
        <TextField
          required
          id="outlined-required"
          label="Number"
          name="number"
          defaultValue=" "
        />
        <Button variant="contained" type="submit" size="medium">
          Add contact
        </Button>
      </Box>
    </>
  );
});
