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
