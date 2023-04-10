import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { Container, Title, SubTitle } from 'components/App/App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const names = this.state.contacts.map(item => item.name);

    if (names.some(name => name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      this.setState({ contacts: [...this.state.contacts, contact] });
    }
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.name !== contact),
    }));
  };

  filterContacts = value => {
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter
          filter={this.state.filter}
          filterContacts={this.filterContacts}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
