import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <form className={styles.form}>
      <select>
        <option>Select Member</option>
        <option>Alice P.</option>
        <option>Alice S.</option>
        <option>Anke</option>
        <option>David</option>
        <option>Dennis</option>
        <option>Fabian</option>
        <option>Hendrik</option>
        <option>Julian</option>
        <option>Leonard</option>
        <option>Manuel S.</option>
        <option>Manuel F.</option>
        <option>Marko</option>
        <option>Riitta</option>
        <option>Zied</option>
      </select>
      create new member
      <input
        type="text"
        placeholder="Firstname"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      Firstname: {firstName}
      <input
        type="text"
        placeholder="Lastname"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      Lastname: {lastName}
      <input type="button" value="Add +" />
    </form>
  );
}

export default Registration;
