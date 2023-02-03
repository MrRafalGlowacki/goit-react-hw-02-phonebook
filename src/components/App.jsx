import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const newContacts = [contact, ...this.state.contacts];
    this.setState({ contacts: newContacts });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <AddForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <ContactList
          contactList={this.state.contacts}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
