import { useState } from 'react';
import shortid from 'shortid';

import useLocalStorage from '../../hooks/useLocalStorage';

import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

import css from './App.module.css';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsList);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(contacts => {
      const isRepeatName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      if (!isRepeatName) {
        return setContacts([...contacts, contact]);
      }

      alert(`${name} is already in contacts`);
      return [...contacts];
    });
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <ContactsFilter value={filter} onChange={onChangeFilter} />

      <ContactsList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
