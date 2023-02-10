import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation.contacts';
import { Button, Grid, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Grid item component="li" sx={{ marginBottom: '15px', width: '100%' }}>
      <Paper
        elevation={2}
        className={css.listItem}
        sx={{ bgcolor: '#94edff41' }}
      >
        <Typography sx={{ fontSize: '22px' }} variant="body1" component="p">
          {name}: {number}
        </Typography>
        <Button
          className={css.btnDelete}
          variant="outlined"
          startIcon={<DeleteIcon />}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </Button>
      </Paper>
    </Grid>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
