import * as Yup from 'yup';

export const validationForm = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(50)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      'only letters'
    )
    .required(),
  number: Yup.number().min(8).required(),
});