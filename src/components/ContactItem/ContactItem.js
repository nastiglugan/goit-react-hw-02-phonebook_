import PropTypes from 'prop-types';

export const ContactItem = ({ contactsItem }) => {
  const { name, tel, id } = contactsItem;
  return (
    <ul>
      <li>name:{name}</li>
      <li>tel:{tel}</li>
    </ul>
  );
};

ContactItem.propTypes = {
  contactsItem: PropTypes.object.isRequired,
};
