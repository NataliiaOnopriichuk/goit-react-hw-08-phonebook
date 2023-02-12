import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-textarea"
      type="text"
      label="Find contacts by name"
      name="filter"
      onChange={event => dispatch(changeFilter(event.target.value))}
      multiline
    />
  );
};
