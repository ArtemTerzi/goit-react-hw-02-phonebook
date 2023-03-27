import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filteredContacts, removeContact }) => (
  <ul>
    {filteredContacts.map(({ id, name, number }) => (
      <ContactItem
        name={name}
        key={id}
        id={id}
        number={number}
        removeContact={removeContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
