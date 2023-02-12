import * as React from 'react';
import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { registerUser } from 'redux/Auth/operation.auth';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(registerUser(form));
  };

  return (
    <AuthForm formTitle="Sign up" onSubmit={handleSubmit} authType="Register" />
  );
};
