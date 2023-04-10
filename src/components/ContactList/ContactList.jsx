import { ContactListItems } from 'components/ContactList/ContactListItems';
import { ContactUl } from 'components/ContactList/ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactUl>
      <ContactListItems contacts={contacts} deleteContact={deleteContact} />
    </ContactUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
