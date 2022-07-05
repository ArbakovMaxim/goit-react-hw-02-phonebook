import * as yup from 'yup';
import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Form.styled';

export const FormName = ({ addContact }) => {
  const hendleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
  });

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
          <Eror name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="number" />
          <Eror name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};
