import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/like.json";
import styles from "../../styles/letter.module.css";

function MomPage() {
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
              <strong>Mãe,</strong>
            </p>
            <p>
              Se você está lendo isso, é porque eu consegui fazer esse código
              funcionar 😅
            </p>
            <p>
              Mas, acima de tudo, é porque eu quis deixar registrado aqui o
              quanto você é importante pra mim.
            </p>
            <p>
              Talvez eu não diga isso sempre, mas nada disso faria sentido sem
              você. Obrigado por estar sempre presente de um jeito que só mãe
              consegue estar.
            </p>
            <p>
              Esse pedacinho da internet também é seu. Porque tudo começa em
              casa — e a minha sempre foi você.
            </p>
            <p>Te amo. ❤️</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MomPage;
