import styles from './Skills.module.scss'
import SkillItem from '../SkillItem/SkillItem'

export default function Skills() {

    const technology = [
        { name: 'html', key: 'html' },
        { name: 'css', key: 'css', },
        { name: 'scss', key: 'scss', },
        { name: 'js', key: 'js', },
        { name: 'react', key: 'react', },
        { name: 'next js', key: 'next js', },
        { name: 'photoshop', key: 'photoshop', },
        { name: 'figma', key: 'figma' }
    ];

    return (
        <section className={styles.skills}>
            {technology.map(technology => <SkillItem
                technology={technology.name}
                key={technology.key} />)}
        </section>
    )
}