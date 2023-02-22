import styles from './Hamburger.module.scss'
import classNames from 'classnames'

import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';

export default function Hanburger({ active, setActive }) {

    const mycontext = useAppContext();

    const [show, setShow] = useState(mycontext.value);

    return (
        // <button className={classNames(active ? `${styles.hamburger} ${styles.hamburger_active}` : styles.hamburger)} onClick={() => setActive(!active)}>
        <button className={classNames(show ? `${styles.hamburger} ${styles.hamburger_active}` : styles.hamburger)} onClick={() => setShow(!show)}>
            <span className={classNames(styles.hamburger__line, styles.hamburger__line_top)}></span>
            <span className={classNames(styles.hamburger__line, styles.hamburger__line_bottom)}></span>
        </button>
    )
}