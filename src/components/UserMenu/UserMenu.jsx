import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/operation.auth';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { resetContactState } from 'redux/contacts/cotactsSlice';

export const UserMenu = ({ email }) => {
  const dispatch = useDispatch();

  return (
    <Box
      component="li"
      sx={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginLeft: 'auto',
      }}
    >
      <Typography sx={{ fontSize: '13px', color: '#94edff77' }}>
        {email}
      </Typography>

      <Button
        onClick={() => {
          dispatch(logoutUser());
          dispatch(resetContactState());
        }}
        sx={{
          color: 'white',
          display: 'block',
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
