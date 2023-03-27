import PropTypes from 'prop-types';

export const ContactItem = ({ name, id, number, removeContact }) => (
  <li name="contact">
    {name}: {number}
    <button type="button" onClick={() => removeContact(id)} id={id}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
