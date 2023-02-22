import styles from './SkillItem.module.scss'

export default function SkillItem({ technology, mod }) {
    return (
        <div className={styles.skill}>
            <h3 className={styles.skill__title}>{technology}</h3>
            <div className={`${styles.skill__progress} ${styles[`skill__progress_${[mod]}`]}`}></div>
        </div>
    )
}