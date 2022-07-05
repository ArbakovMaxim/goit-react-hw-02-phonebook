import {
  ContWrapper,
  ContList,
  ContItem,
} from 'components/Contacts/Contacts.styled';

export const Contacts = ({ contacts }) => {
  return (
    <ContWrapper>
      <ContList>
        {contacts.map(contact => {
          return (
            <ContItem key={contact.id}>
              {contact.name}: {contact.number}
            </ContItem>
          );
        })}
      </ContList>
    </ContWrapper>
  );
};
