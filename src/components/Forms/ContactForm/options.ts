import * as Yup from 'yup';

export const initialValues = {
  fullName: '',
  email: '',
  queryRelated: '',
  message: '',
};

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  queryRelated: Yup.string()
    .required('Required'),
  message: Yup.string()
    .required('Required'),
});
