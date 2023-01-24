import { Component, createMemo, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);

  const counter2 = createMemo(() => counter() ** 2);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <div>
          COUNTER
          <div>{counter()}</div>
          <button onClick={() => setCounter((val) => ++val)}>+1</button>
          <div>counter2</div>
          <div>{counter2()}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
