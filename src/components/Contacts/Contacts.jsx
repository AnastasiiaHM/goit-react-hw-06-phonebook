import { Item } from './ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contaksSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const filteredContacts = () => {
    if (!filter) return contacts;

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const contactsList = filteredContacts();
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return contactsList.length <= 0 ? (
    <p>There are no contacts yet</p>
  ) : (
    <ol>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={removeContact} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};
