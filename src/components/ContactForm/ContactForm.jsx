import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
// import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operation.contacts';
import { Button } from '@mui/material';

export const ContactForm = memo(() => {
  // const [name, setName] = useState(' ');
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectorContacts);

  const addContacts = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    if (
      stateContacts.items.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    )
      return alert(`${name} is already in contacts`);
    dispatch(addContact({ name, phone }));
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
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          id="outlined-required"
          label="Name"
          name="name"
          defaultValue=" "
          // inputProps={{ inputMode: 'string', pattern: '[a-zA-Zа-яА-Я]*' }}
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
          // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          defaultValue=" "
        />
        <Button variant="contained" type="submit" size="medium">
          Add contact
        </Button>
      </Box>
      {/* <form className={css.form} onSubmit={addContacts}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form> */}
    </>
  );
});
