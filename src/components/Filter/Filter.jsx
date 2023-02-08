import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

// import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-textarea"
      label="Find contacts by name"
      name="filter"
      onChange={event => dispatch(changeFilter(event.target.value))}
      multiline
    />
    // <label className={css.label}>
    //   Find contacts by name
    //   <input
    //     type="text"
    //     name="filter"
    //     onChange={event => dispatch(changeFilter(event.target.value))}
    //   />
    // </label>
  );
};
