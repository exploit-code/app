import styles from "./Button.module.scss";

export default function Button({ text, mod }) {
  return <button className={`${styles.button} ${styles[`button_${[mod]}`]}`}>{text}</button>;
}
