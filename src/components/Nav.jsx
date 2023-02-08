import styles from '../styles/components/Nav.module.scss'
import NavItem from './NavItem'

export default function Nav({ navData}) {

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navData.map(navItem => <NavItem navItem={navItem} key={navItem.key} />)}
            </ul>
        </nav>
    )
}