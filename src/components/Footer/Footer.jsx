import styles from "./Footer.module.scss";
import Telegram from "../../../public/images/telegram.svg";
import Github from "../../../public/images/github.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__copyright}>© 2023 npc_unit.</div>
      <div className={styles.footer__icons}>
        <a
          className={styles.footer__link}
          href="https://t.me/npc_unit"
          target="_blank"
        >
          <Telegram />
        </a>
        <a
          className={styles.footer__link}
          href="https://github.com/exploit-code/"
          target="_blank"
        >
          <Github />
        </a>
      </div>
    </footer>
  );
}
