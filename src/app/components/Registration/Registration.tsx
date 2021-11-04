import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Registration.module.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  function handelChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUserName(event.target.value);
    alert('Hey ' + event.target.value);
    console.log(selectedUserName);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
  }

  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  const userOptions = users.map((user) => (
    <option key={user.id}>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select onClick={handleSelectClick} onChange={handelChange}>
        <option disabled>Select user</option>
        {userOptions}
      </select>
      or
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input type="submit" value="Sign in" />
    </form>
  );
}
export default Registration;
