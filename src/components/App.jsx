import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, tel: number },
      ],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
