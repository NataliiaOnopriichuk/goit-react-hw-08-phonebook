import { privateApi } from 'http';

export const getContacts = async (search) => {
  const { data } = await privateApi.get(
    '/contacts',
    {
      params: { search },
    }
  );
  return data;
};

export const addContactService = async body => {
  const { data } = await privateApi.post(
    '/contacts',
    body
  );
  return data;
};

export const deleteContactService = id => {
  return privateApi.delete(
    '/contacts/' + id
  );
};
