import React from 'react';
import styles from './App.module.css';
import Title from './components/Title';
import SplashImage from './components/SplashImage/SplashImage';
import Registration from './components/Registration/Registration';
import { useState } from 'react';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
  console.log(selectedUserName);

  return (
    <main className={styles.container}>
      <SplashImage
        url="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="Bergfest"
      />
      <div className={styles.welcome}>
        <Title text="Bergfest" />
        <form className={styles.form}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="submit" value="Register" />
        </form>

        <Registration onUserNameSelect={setSelectedUserName} />
      </div>
    </main>
  );
}
export default App;
