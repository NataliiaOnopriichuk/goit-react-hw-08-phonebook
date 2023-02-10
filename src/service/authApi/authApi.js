import axios from "axios";
import { privateApi } from "http";
import { publicApi } from "http";


export const registerUserApi = async body => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
    console.log('data :>> ', data);
  return data;
};

export const loginUserApi = async body => {
  const { data } = await publicApi.post(
    'https://connections-api.herokuapp.com/users/login',
    body
  );
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await privateApi.get(
    'https://connections-api.herokuapp.com/users/current'
  );
  return data;
};