import styles from './AimOfTheGame.module.css'

const AimOfTheGame = () => (
    <div className={styles.container}>
        <h3 className={styles.heading}>Aim of the game</h3>
        <div className={styles.twoColumn}>
            <div className={styles.column}>
                <p>
                    Using the constraints provided by four cards, invent a Thing From the Future
                    within the time limit. Gain points by coming up with the most interesting,
                    entertaining, or amusing imagined object.
                </p>
                <p>
                    Play as many rounds as you like, and with as many people as you like, though
                    between two and six works best, with four being optimal. And set whatever time
                    limit you like, though we’d suggest between three and five minutes works nicely.
                </p>
                <p>
                    Once time is up, have one player read out all the Things without giving away
                    their originator. Then you can all cast a vote for your favourite and award a
                    point to each player for each vote cast for that was cast for their Thing.
                </p>
            </div>
            <div className={styles.column}>
                <img src="https://via.placeholder.com/400" />
            </div>
        </div>
    </div>
)

export default AimOfTheGame
