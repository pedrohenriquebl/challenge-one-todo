import todoLogo from '../assets/logo.svg'
import styles from './Hero.module.css'

export function Hero() {
    return (
        <header className={styles.header}>
            <img 
                src={todoLogo}
                alt="Todo Logo"
            />
            <div className={styles.title}>
                <h2 className={styles.firstSyllable}>to</h2>
                <h2 className={styles.secondSyllable}>do</h2>
            </div>
        </header>
    );
}