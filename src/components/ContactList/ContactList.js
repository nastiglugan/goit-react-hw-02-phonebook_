import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map(contact => {
          const { id } = contact;
          return (
            <li key={id}>
              <ContactItem contactsItem={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
