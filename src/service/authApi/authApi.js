import axios from "axios";



export const registerUserApi = async body => {
  const { data } = await axios.post(
    'users/signup',
    body
  );
  return data;
};

export const loginUserApi = async body => {
  const { data } = await axios.post(
    'users/login',
    body
  )
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await axios.get(
    'users/current'
  );
  return data;
};

export const logoutApi = async () => {
  const { data } = await axios.post(
    'users/logout'
  );
  return data;
};