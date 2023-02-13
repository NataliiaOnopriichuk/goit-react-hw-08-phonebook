import axios from "axios";


export const getContacts = async (search) => {
  const { data } = await axios.get(
    '/contacts',
    {
      params: { search },
    }
  );
  return data;
};

export const addContactService = async body => {
  const { data } = await axios.post(
    '/contacts',
    body
  );
  return data;
};

export const deleteContactService = id => {
  return axios.delete(
    '/contacts/' + id
  );
};
