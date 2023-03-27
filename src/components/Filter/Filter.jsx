import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ state, handleChange }) => (
  <div>
    <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
    <FilterInput
      type="text"
      name="filter"
      id="filter"
      value={state.filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
