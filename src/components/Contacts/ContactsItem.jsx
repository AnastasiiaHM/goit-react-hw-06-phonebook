import PropTypes from 'prop-types';

import { ListItem, Button } from '../Contacts/ContactsItem.styled';

export const Item = ({ id, name, number, onClick }) => {
  return (
    <ListItem>
      {name}: {number}
      <Button onClick={() => onClick(id)} type="button">
        Delete
      </Button>
    </ListItem>
  );
};

Item.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};
