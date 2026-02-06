import { useState } from "react";
import styles from "../styles/home.module.css";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.letter}>Em construção</h1>
    </div>
  );
}

export default Home;
