import React from 'react';
import styles from './App.module.css';
import Title from './components/Title';
import SplashImage from './components/Splashimage/Splashimage';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <SplashImage
        url="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="Bergfest"
      />
      <div className={styles.welcome}>
        <Title text="Bergfest" />
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
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="button" value="Add +" />
        </form>
      </div>
    </main>
  );
}
export default App;
