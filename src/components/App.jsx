import { Component, Fragment } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
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
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact, id: nanoid() }],
    }));
  };

  removeContact = id => {
    console.log(id);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getFilterNormalize = () => this.state.filter.toLowerCase();

  getFilteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.getFilterNormalize())
    );

  render() {
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <ContactForm
          state={this.state}
          onSubmit={this.addContact}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter state={this.state} handleChange={this.handleChange} />
        <ContactList
          state={this.state}
          filteredContacts={this.getFilteredContacts()}
          removeContact={this.removeContact}
        />
      </Fragment>
    );
  }
}
