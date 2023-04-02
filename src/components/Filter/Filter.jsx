import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filtersSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const filterValue = e.target.value;

    dispatch(setFilter(filterValue));
  };
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
