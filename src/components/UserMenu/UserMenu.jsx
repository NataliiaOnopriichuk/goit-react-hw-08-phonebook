import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/operation.auth';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

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
      <Typography sx={{ fontSize: '13px' }}>{email}</Typography>
      <Button
        onClick={() => {
          dispatch(logoutUser());
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
