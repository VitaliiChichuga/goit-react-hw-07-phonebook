import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contact-async-thunk';
import { getVisibleContacts } from '../../redux/contact-selectors';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <div className={style.div}>
      <ul>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id} className={style.items}>
            {name}:<span className={style.number}>{phone}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
