import * as React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/Auth/operation.auth';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(loginUser(form));
  };

  return (
    <AuthForm formTitle="Sign in" onSubmit={handleSubmit} authType="Login" />
  );
};
