import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ text }) {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
}
