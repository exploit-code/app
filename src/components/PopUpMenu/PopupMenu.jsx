import styles from './PopupMenu.module.scss'
import classNames from 'classnames'
import NavItem from '../NavItem/NavItem'

export default function PopupMenu({ active, navData }) {

    return (
        <div className={classNames(active ? `${styles.popupMenu} ${styles.popupMenu_active}` : styles.popupMenu)}>
            <nav className={styles.popupMenu__nav}>
                <ul className={styles.popupMenu__list}>
                    {navData.map(navItem => <NavItem navItem={navItem} key={navItem.key} />)}
                </ul>
            </nav>
        </div>
    )
}