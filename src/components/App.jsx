import { Component } from 'react';
import { Container } from 'ui/Container.styled';
import { FormName } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <FormName />
      </Container>
    );
  }
}
