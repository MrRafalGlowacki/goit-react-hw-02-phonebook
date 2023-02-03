import React, { Component } from 'react';
import css from './AddForm.module.css';
import { AddName } from './AddName/AddName';
import { AddPhone } from './AddPhone/AddPhone';

export class AddForm extends Component {
  render() {
    const { handleChange, handleSubmit, name, number } = this.props;

    return (
      <>
        <h2 className={css.title}>Phonebook</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <AddName handleChange={handleChange} name={name} />
          <AddPhone handleChange={handleChange} number={number}/>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
