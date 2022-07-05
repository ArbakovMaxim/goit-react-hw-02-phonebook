import * as yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import { ButtonSubmit, TitleBlock, WrapperForm, Input } from './Form.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const FormName = ({ addContact }) => {
  const hendleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <WrapperForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};
