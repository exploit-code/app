import styles from './ProjectItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import GradientLine from '../GradientLine/GradientLine'

export default function ProjectsItem({ data }) {
    return (
        <div className={styles.projectItem}>
            <Image className={styles.projectItem__preview} src={data.src} alt={data.alt} placeholder="blur" />
            <div className={styles.projectItem__text}>
                <p className={styles.projectItem__title}>{data.title}</p>
                <Link className={styles.projectItem__link} href={data.link} target="_blank">Посмотреть</Link>
            </div>
            <GradientLine />
        </div>
    )
}