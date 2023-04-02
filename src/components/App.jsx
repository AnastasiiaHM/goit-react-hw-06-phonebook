import { useState } from 'react';
import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';
import Form from './Form/Form';
import { Container, Title } from './App.styled';
import { nanoid } from 'nanoid';
import useLocalStorage from './LocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contact', []);
  const [filter, setFilter] = useState('');
  console.log(contacts);
  const addContactToState = ({ name, number }) => {
    if (isContactExist(name)) {
      return alert(`${name} is already in Contacts`);
    }
    setContacts(prevContacts => {
      const newContact = { name, id: nanoid(), number };
      return [newContact, ...prevContacts];
    });
  };

  const isContactExist = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const removeContact = idForDelete => {
    setContacts(contacts => {
      return contacts.filter(({ id }) => id !== idForDelete);
    });
  };

  const filterNames = () => {
    if (!filter) return contacts;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filterHandle = ({ target }) => {
    setFilter(target.value);
  };

  const filtredContacts = filterNames();

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={addContactToState} />
      <Title>Contacts</Title>
      <Filter onChange={filterHandle} />
      {filtredContacts.length <= 0 ? (
        <p>There are no contacts yet</p>
      ) : (
        <Contacts contacts={filtredContacts} onClick={removeContact} />
      )}
    </Container>
  );
}
