import styles from "./PopupMenu.module.scss";
import classNames from "classnames";
import NavItem from "../NavItem/NavItem";
import { useEffect } from "react";
import Button from "../Button/Button";
import Link from "next/link";

export default function PopupMenu({ active, navData }) {
  useEffect(() => {
    document.body.className = active ? "overflow" : "";
  });

  return (
    <div className={classNames(active ? `${styles.popupMenu} ${styles.popupMenu_active}` : styles.popupMenu)}>
      <nav className={styles.popupMenu__nav}>
        <ul className={styles.popupMenu__list}>
          {navData.map((navItem) => (
            <NavItem navItem={navItem} key={navItem.key} />
          ))}
        </ul>
        <div className={styles.popupMenu__buttons}>
          <Link href="#" target="_blank">
            <Button text="Резюме" mod="default" />
          </Link>
          <Link href="https://t.me/npc_unit" target="_blank">
            <Button text="Написать сообщение" mod="transparent" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
