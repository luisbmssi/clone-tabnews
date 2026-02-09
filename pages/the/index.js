import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "public/like.json";
import styles from "styles/letter.module.css";

function ThePage() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      {!show ? (
        <button className={styles.button} onClick={() => setShow(true)}>
          Clique aqui
        </button>
      ) : (
        <div className={styles.card}>
          <Lottie animationData={animationData} loop style={{ width: 220 }} />

          <div className={styles.letter}>
            <p>
              <strong>Oi amorzinho ❤️</strong>
            </p>

            <p>
              Às vezes a gente não precisa de grandes discursos, só de pequenos
              gestos que dizem muito.
            </p>

            <p>
              Que essa mensagem te lembre que você é importante, especial e
              merece tudo de bom que existe.
            </p>

            <p>Te amo!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThePage;
