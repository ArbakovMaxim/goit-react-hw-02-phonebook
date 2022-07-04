import { Section } from 'components/Section/Section';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ButtonSubmit } from './Form.styled';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const FormName = () => {
  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Section title="PhoneBook">
      <div>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={hendleSubmit}
        >
          <Form>
            <h2>Name</h2>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <h2>Number</h2>
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
            <ButtonSubmit type="submit">Add contact</ButtonSubmit>
          </Form>
        </Formik>
      </div>
    </Section>
  );
};
