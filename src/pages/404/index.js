import styles from '../../styles/components/404.module.scss'

export default function Custom_404_page() {
    return (
        <h1 className={styles.notFound}>
            <span className={styles.notFound__code}>404</span>
            <span className={styles.notFound__line}></span>
            <span className={styles.notFound__message}>This page could not be found.</span>
        </h1>
    )
}
