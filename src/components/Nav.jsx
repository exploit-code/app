import Link from 'next/link'
import styles from '../styles/components/Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li><Link className={styles.nav__link} href="/">Home</Link></li>
                <li><Link className={styles.nav__link} href="/about">About</Link></li>
                <li><Link className={styles.nav__link} href="/experience">Experience</Link></li>
                <li><Link className={styles.nav__link} href="/work">Work</Link></li>
                <li><Link className={styles.nav__link} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}