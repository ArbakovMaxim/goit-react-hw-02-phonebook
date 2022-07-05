import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from 'ui/Container.styled';
import { Contacts } from './Contacts/Contacts';
import { FormName } from './Form/Form';
import { Section } from 'components/Section/Section';
import { Filtr } from 'components/Filtr/Filtr';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContact = () => {
    const normolizedFiltr = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normolizedFiltr)
    );
  };

  render() {
    const resyltFilter = this.filterContact();
    return (
      <Container>
        <Section title="PhoneBook">
          <FormName addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filtr changeFilter={this.changeFilter} value={this.state.filter} />
          <Contacts contacts={resyltFilter} />
        </Section>
      </Container>
    );
  }
}
