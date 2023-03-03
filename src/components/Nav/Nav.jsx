import styles from "./Nav.module.scss";
import NavItem from "../NavItem/NavItem";

export default function NavList({ navData }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navData.map((navItem) => (
          <NavItem navItem={navItem} key={navItem.key} />
        ))}
      </ul>
    </nav>
  );
}
