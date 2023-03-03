import styles from "./Hamburger.module.scss";
import classNames from "classnames";

export default function Hanburger({ active, setActive }) {
  return (
    <button
      className={classNames(active ? `${styles.hamburger} ${styles.hamburger_active}` : styles.hamburger)}
      onClick={() => setActive(!active)}
    >
      <span className={classNames(styles.hamburger__line, styles.hamburger__line_top)}></span>
      <span className={classNames(styles.hamburger__line, styles.hamburger__line_bottom)}></span>
    </button>
  );
}
