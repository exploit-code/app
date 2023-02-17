import styles from './About.module.scss'
import classNames from 'classnames'

export default function About() {
    return (
        <section className={styles.about}>
            <h1 className={styles.about__title}>Привет, меня зовут Александр.</h1>
            <h2 className={classNames(styles.about__description, styles.about__description_one)}>Я создаю быстрые, адаптивные веб-сайты с использованием лучших практик.</h2>
            <h3 className={classNames(styles.about__description, styles.about__description_two)}>Основная область моих знаний — разработка пользовательских интерфейсов.</h3>
        </section>
    )
}