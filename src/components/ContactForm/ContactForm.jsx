import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddToContactSubmit = e => {
    e.preventDefault();

    if (
      this.props.state.contacts.some(
        contact => contact.name === this.state.name
      )
    )
      this.alertmessage(this.state.name);
    else this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  alertmessage = name => alert(`${this.state.name} is already in contacts`);

  render() {
    return (
      <div>
        <form onSubmit={this.onAddToContactSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="tel">Number</label>
          <input
            type="tel"
            id="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add to contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
