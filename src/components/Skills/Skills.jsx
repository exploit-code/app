import styles from './Skills.module.scss'
import SkillItem from '../SkillItem/SkillItem'

export default function Skills() {

    const technologys = [
        { name: 'html', key: 'html', mod: 'html' },
        { name: 'css', key: 'css', mod: 'css' },
        { name: 'scss', key: 'scss', mod: 'scss' },
        { name: 'js', key: 'js', mod: 'js' },
        { name: 'react', key: 'react', mod: 'react' },
        { name: 'next js', key: 'next js', mod: 'nextjs' },
        { name: 'photoshop', key: 'photoshop', mod: 'ps' },
        { name: 'figma', key: 'figma', mod: 'figma' }
    ];

    return (
        <section className={styles.skills}>
            <div className={styles.skills__box}>
                <h2 className={styles.skills__title}>Skills</h2>
                <p className={styles.skills__description}>I like to take responsibilities for making aesthetic user interface. I use  modern architecture for this.</p>
            </div>

            <div className={styles.skills__box}>
                {technologys.map(technology => <SkillItem
                    technology={technology.name}
                    key={technology.key}
                    mod={technology.mod} />)}
            </div>
        </section>
    )
}