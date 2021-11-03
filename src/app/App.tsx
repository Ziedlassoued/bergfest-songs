import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="Bergfest"
      />
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Bergfest <span>by Neue Fische</span>
        </h1>
        <form className={styles.form}>
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="button" value="Login" />
        </form>
      </div>
    </main>
  );
}
export default App;
