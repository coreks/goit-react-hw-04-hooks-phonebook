import { useState } from 'react';
import shortid from 'shortid';

import css from '../Form/Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleNameChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleNumberChange = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);

    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
          id={nameInputId}
          className={css.input}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
          id={numberInputId}
          className={css.input}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
