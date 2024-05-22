import * as Yup from 'yup';

export const options = {
  initialValues: {
    email: '',
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  }),
  onSubmit: (values: any, { resetForm }: { resetForm: () => void }) => {},
};
