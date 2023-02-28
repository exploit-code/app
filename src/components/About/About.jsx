import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>Hi, my name is Aleksandr.</h1>
      <h2 className={styles.about__subtitle}>I'm a Frontend-developer.</h2>
      <div className={styles.about__description}>
        <p className={styles.about__text}>
          I create successful responsive websites that are fast, easy to use,
          and built with best practices.
        </p>
        <p className={styles.about__text}>
          The main field of me knowledges is developing user interface.
        </p>
      </div>
    </section>
  );
}