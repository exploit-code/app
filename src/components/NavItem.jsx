import Link from 'next/link'
import styles from '../styles/components/NavItem.module.scss'

export default function NavItem({ navItem }) {

    return (
        <li className={styles.navItem} onClick={() => navItem.setPopupMenuActive(false)}>
            <Link className={styles.navItem__link} href={navItem.link}>{navItem.title}</Link>
        </li>
    )
}