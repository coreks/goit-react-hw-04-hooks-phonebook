import PropTypes from 'prop-types';
import css from '../ContactItem/ContactItem.module.css';

const ContactsItem = ({ name, number, id, onDeleteContact }) => (
  <li className={css.item}>
    <span>{name}: </span>
    <span>{number} </span>
    <span>
      <button
        className={css.item__button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </span>
  </li>
);

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactsItem;
