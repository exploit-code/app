import styles from '../styles/components/ProjectsList.module.scss'
import ProjectItem from './ProjectItem'
import TitleBox from './TitleBox'
import prev_1 from '../../public/images/prev_1.png'
import prev_2 from '../../public/images/prev_2.png'
import prev_3 from '../../public/images/prev_3.png'
import prev_4 from '../../public/images/prev_4.png'
import prev_5 from '../../public/images/prev_5.png'
import prev_6 from '../../public/images/prev_6.png'
import prev_7 from '../../public/images/prev_7.png'

export default function Projects() {

    const projects = [
        { title: 'Резюме', key: 1, src: prev_1, alt: 'project', link: 'https://bio-sigma.vercel.app' },
        { title: 'Dr.Web Security Space', key: 2, src: prev_2, alt: 'project', link: 'https://www.drweb.ru/landing/blackfriday2022' },
        { title: 'Free anti-virus', key: 3, src: prev_3, alt: 'project', link: 'https://www.freeantivirusdownloads.com' },
        { title: 'Dr.Web Мобильный бессрочный', key: 4, src: prev_4, alt: 'project', link: 'https://www.drweb.ru/landing/promokp20' },
        { title: 'Dr.Web Security Space', key: 5, src: prev_5, alt: 'project', link: 'https://www.drweb.ru/landing/promo01062022' },
        { title: 'О компании Dr.Web', key: 6, src: prev_6, alt: 'project', link: 'https://company.drweb.ru/press/presskit' },
        { title: 'Конструктор лицензий Dr.Web', key: 7, src: prev_7, alt: 'project', link: 'https://products.drweb.ru/biz/v4' },
    ]

    return (
            <section className={styles.projects}>
                <TitleBox title='Мои работы' />
                <div className={styles.projects__list}>
                    {projects.map(projectItem => <ProjectItem data={projectItem} key={projectItem.key} />)}
                </div>
            </section>
    )
}