import styles from '../styles/components/Hamburger.module.scss'
import classNames from 'classnames';


export default function Hanburger() {
    return (
        <button className={styles.hamburger}>
            <span className={classNames(styles.hamburger__line, styles.hamburger__line_top)}></span>
            <span className={classNames(styles.hamburger__line, styles.hamburger__line_center)}></span>
            <span className={classNames(styles.hamburger__line, styles.hamburger__line_bottom)}></span>
        </button>
    )
}