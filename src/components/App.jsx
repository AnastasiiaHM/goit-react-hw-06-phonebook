import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';
import { Form } from './Form/Form';

import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Container>
  );
};
