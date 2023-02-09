import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// const API_KEY = "AIzaSyDz0LKqNwioMP8Fe8hlPj-LfAdTtazYiGY";

// const baseUrl = {
//   DB: "https://bc-40-414ee-default-rtdb.firebaseio.com",
//   AUTH: "https://identitytoolkit.googleapis.com/v1",
// };

// const setBaseUrl = (url) => (axios.defaults.baseURL = url);

// const setToken = (token) =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);



export const registerUserApi = async (body) => {
    const { data } = await axios.post("users/signup", body)
    return data
};

