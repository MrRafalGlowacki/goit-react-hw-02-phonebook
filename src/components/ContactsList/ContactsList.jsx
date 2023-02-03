import React, { Component } from 'react';
import css from './ContactList.module.css';
export class ContactList extends Component {
  render() {
    const { contactList } = this.props;
    const list = contactList.map(contact => (
      <li key={contact.id} className={css.item}>
        <p className={css.name}>
          {contact.name}: {contact.number}
        </p>
      </li>
    ));
    return (
      <>
        <h3 className={css.title}>Contacts</h3>
        {contactList.length > 0 && <ul>{list}</ul>}
      </>
    );
  }
}
