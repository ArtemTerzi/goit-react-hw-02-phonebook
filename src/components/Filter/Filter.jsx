import PropTypes from 'prop-types';

export const Filter = ({ state, handleChange }) => (
  <div>
    <label htmlFor="filter">Find contacts by name</label>
    <input
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
