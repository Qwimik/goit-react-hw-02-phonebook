import {
  ContactLi,
  ContactBtn,
} from 'components/ContactList/ContactList.styled';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ContactListItems = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number }) => {
    return (
      <ContactLi key={name}>
        <span>
          {name}: {number}
        </span>
        <ContactBtn type="button" onClick={() => deleteContact(name)}>
          <FaWindowClose />
        </ContactBtn>
      </ContactLi>
    );
  });
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
