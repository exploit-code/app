import styles from '../styles/components/Header.module.scss'
import Logo from '../components/Logo'
import Nav from './Nav'
import Hanburger from './Hamburger'

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
            <Hanburger />
        </header>
    )
}