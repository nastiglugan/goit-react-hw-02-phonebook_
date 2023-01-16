import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => {
          const { name, id, tel } = contact;
          return (
            <li key={id}>
              <ul>
                <li>name:{name}</li>
                <li>tel:{tel}</li>
              </ul>
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
