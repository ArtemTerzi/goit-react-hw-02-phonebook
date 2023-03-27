export const ContactList = ({ filteredContacts, removeContact }) => (
  <ul>
    {filteredContacts.map(({ id, name, number }) => (
      <li name="contact" key={id}>
        {name}: {number}
        <button type="button" onClick={() => removeContact(id)} id={id}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
