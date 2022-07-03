import { Section } from 'components/Section/Section';
import { Formik } from 'formik';

export const FormName = () => {
  return (
    <Section title="Name">
      <Formik>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Formik>
    </Section>
  );
};
