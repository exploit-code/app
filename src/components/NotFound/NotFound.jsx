import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <h1 className={styles.notFound}>
      <span className={styles.notFound__code}>404</span>
      <span className={styles.notFound__line}></span>
      <span className={styles.notFound__message}>
        This page could not be found.
      </span>
    </h1>
  );
}
