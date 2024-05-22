import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

export const options = {
  initialValues: {
    fullName: '',
    email: '',
    queryRelated: '',
    message: '',
  },
  validationSchema: Yup.object({
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
  }),
  onSubmit: async (values: any, { resetForm }: { resetForm: () => void }) => {
    emailjs
      .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUESTION!,
      {
        from_email: values.email,
        name: values.fullName,
        query: values.queryRelated,
        message: values.message,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY!,
      },
      )
      .then(
        () => {
          resetForm();
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  },
};
