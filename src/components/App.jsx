import { Component } from 'react';
import { Container } from 'ui/Container.styled';
import { Contacts } from './Contacts/Contacts';
import { FormName } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <Container>
        <FormName />
        <Contacts />
      </Container>
    );
  }
}
