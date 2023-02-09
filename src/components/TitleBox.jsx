import styles from '../styles/components/TitleBox.module.scss'
import GradientLine from './GradientLine'

export default function TitleBox({ title }) {
    return (
        <div className={styles.titleBox}>
            <h2 className={styles.titleBox__title}>{title}</h2>
            <GradientLine />
        </div>
    )
}