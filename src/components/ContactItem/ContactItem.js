import PropTypes from 'prop-types';

export const ContactItem = ({ contactsItem, deleteContact }) => {
  const { name, tel, id } = contactsItem;
  return (
    <div>
      <ul>
        <li>name:{name}</li>
        <li>tel:{tel}</li>
      </ul>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contactsItem: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
