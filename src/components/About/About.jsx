import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>Привет, меня зовут Александр.</h1>
      <h2 className={styles.about__subtitle}>Я Фронтенд-разработчик.</h2>
      <div className={styles.about__description}>
        <p className={styles.about__text}>Я создаю быстрые адаптивные веб-сайты, простые в использовании с использованием лучших практик.</p>
        <p className={styles.about__text}>Основная область моих знаний — разработка пользовательских интерфейсов.</p>
      </div>
    </section>
  );
}
