import classNames from 'classnames';
import styles from './SkillItem.module.scss'

export default function SkillItem({ technology }) {


    const html_1 = `${technology}`;
    console.log(html_1);



    return (
        <div className={styles.skill}>
            <h3 className={styles.skill__title}>{technology}</h3>
            <div className={classNames(styles.skill__progress, styles.skill__progress_html)}></div>
        </div>
    )
}