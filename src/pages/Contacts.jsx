import { Box, Container, Paper } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation.contacts';
import {
  selectorAuth,
  selectorContacts,
  selectorFilter,
} from 'redux/selectors';
// import { tokenId } from 'utils/http';

export const Contacts = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectorFilter);
  const { isLoading, error } = useSelector(selectorContacts);
  const { token, user } = useSelector(selectorAuth);

  useEffect(() => {
    // if (token && user.email) {
    //   // tokenId.set(token);
    // }
    dispatch(fetchContacts(search));
  }, [token, user.email, dispatch, search]);

  if (error) return <p>Download error</p>;

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: '30px 0',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: '20px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center',
            bgcolor: '#558bc820',
          }}
        >
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {isLoading ? <Loader /> : <ContactList />}
        </Paper>
      </Box>
    </Container>
  );
};
