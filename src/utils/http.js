// import axios from 'axios';

// export const publicApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// export const privateApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// export const tokenId = {
//   set(value) {
//     privateApi.defaults.headers.Authorization = `Bearer ${value}`;
//   },
//   unSet() {
//     privateApi.defaults.headers.Authorization = null;
//   },
// };
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};