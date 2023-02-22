import styles from './ProjectsList.module.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import prev_1 from '../../../public/images/prev_1.jpg'
import prev_2 from '../../../public/images/prev_2.jpg'
import prev_3 from '../../../public/images/prev_3.jpg'
import prev_4 from '../../../public/images/prev_4.jpg'
import prev_5 from '../../../public/images/prev_5.jpg'
import prev_6 from '../../../public/images/prev_6.jpg'
import prev_7 from '../../../public/images/prev_7.jpg'
import prev_8 from '../../../public/images/prev_8.jpg'

export default function Projects() {

    const projects = [
        { key: 1, src: prev_1, alt: 'project', link: 'https://bio-sigma.vercel.app' },
        { key: 2, src: prev_2, alt: 'project', link: 'https://www.drweb.ru/landing/blackfriday2022' },
        { key: 5, src: prev_5, alt: 'project', link: 'https://www.drweb.ru/landing/promo01062022' },
        { key: 7, src: prev_7, alt: 'project', link: 'https://products.drweb.ru/biz/v4' },
        { key: 4, src: prev_4, alt: 'project', link: 'https://www.drweb.ru/landing/promokp20' },
        { key: 3, src: prev_3, alt: 'project', link: 'https://www.freeantivirusdownloads.com' },
        { key: 6, src: prev_6, alt: 'project', link: 'https://company.drweb.ru/press/presskit' },
        { key: 8, src: prev_8, alt: 'project', link: 'https://estore.drweb.ru/promomobile' },
    ]

    return (
        <section className={styles.projects}>
            <div className={styles.projects__list}>
                {projects.map(projectItem => <ProjectItem data={projectItem} key={projectItem.key} />)}
            </div>
        </section>
    )
}