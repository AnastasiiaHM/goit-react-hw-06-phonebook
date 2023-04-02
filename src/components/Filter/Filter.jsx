import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          onChange={onChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
