import styles from '../styles/components/TitleBox.module.scss'

export default function TitleBox({ title }) {
    return (
        <h2 className={styles.titleBox}>{title}</h2>
    )
}