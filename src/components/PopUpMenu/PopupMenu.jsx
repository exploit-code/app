import styles from './PopupMenu.module.scss'
import classNames from 'classnames'
import NavItem from '../NavItem/NavItem'
import { useEffect } from 'react';
import Button from '../Button/Button';

export default function PopupMenu({ active, navData }) {

    useEffect(() => {
        document.body.className = active ? 'overflow' : '';
    });

    return (
        <div className={classNames(active ? `${styles.popupMenu} ${styles.popupMenu_active}` : styles.popupMenu)}>
            <nav className={styles.popupMenu__nav}>
                <ul className={styles.popupMenu__list}>
                    {navData.map(navItem => <NavItem navItem={navItem} key={navItem.key} />)}
                </ul>
                <div className={styles.popupMenu__buttons}>
                    <Button text='Resume' mod='default' />
                    <Button text="Let's Talk" mod='transparent' />
                </div>
            </nav>
        </div>
    )
}