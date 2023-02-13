import { privateApi, publicApi } from "utils/http";


export const registerUserApi = async body => {
  const { data } = await publicApi.post(
    'users/signup',
    body
  );
  return data;
};

export const loginUserApi = async body => {
  const { data } = await publicApi.post(
    'users/login',
    body
  )
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await privateApi.get(
    'users/current'
  );
  return data;
};

export const logoutApi = async () => {
  const { data } = await privateApi.post(
    'users/logout'
  );
  return data;
};