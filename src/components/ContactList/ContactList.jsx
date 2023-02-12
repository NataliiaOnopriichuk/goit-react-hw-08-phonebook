import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { filterContactsByName } from 'redux/selectors';
import { Grid } from '@mui/material';

export const ContactList = () => {
  const filterContacts = useSelector(filterContactsByName);

  return (
    <Grid container component="ul">
      {filterContacts.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </Grid>
  );
};
