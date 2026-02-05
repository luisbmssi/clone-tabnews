import { useState } from "react"
import Lottie from "lottie-react"
import animationData from "../public/like.json"
import styles from "../styles/home.module.css"

function Home() {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            {!show
                ?
                (
                    <button className={styles.button} onClick={() => setShow(true)}>Clique aqui</button>
                )
                :
                (
                    <div className={styles.card}>
                        <Lottie
                            animationData={animationData}
                            loop
                            style={{ width: 220 }}
                        />

                        <p className={styles.letter}>
                            Oi amorzinho ❤️
                            <br /><br />
                            Às vezes a gente não precisa de grandes discursos,
                            só de pequenos gestos que dizem muito.
                            <br /><br />
                            Que essa mensagem te lembre que você é importante,
                            especial e merece tudo de bom que existe.
                            <br /><br />
                            Te amo!
                        </p>
                    </div>
                )}
        </div>
    )
}

export default Home