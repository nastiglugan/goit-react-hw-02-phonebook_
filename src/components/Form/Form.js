// import PropTypes from 'prop-types';
import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleIputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleIputChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+380XXXXXXXXX"
            value={this.state.tel}
            onChange={this.handleIputChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

// Form.propTypes = {
//   value: PropTypes.string.isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };
