import { Section } from 'components/Section/Section';
import {
  ContWrapper,
  ContList,
  /*  ContItem, */
} from 'components/Contacts/Contacts.styled';

export const Contacts = () => {
  return (
    <Section title="Contacts">
      <ContWrapper>
        <ContList></ContList>
      </ContWrapper>
    </Section>
  );
};
