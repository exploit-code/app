import styles from './Experience.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import classNames from 'classnames';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Experience() {

    const works = [
        {
            company: "Dr.Web", key: "drweb", position: "Senior Web-master",
            tasks: [
                "- Company website support",
                "- Errors correction",
                "- Creation of new services",
                "- Website performance optimization",
                "- Landing page creation"
            ]
        },
        {
            company: "Outside Digital", key: "od", position: "Senior Content Manager",
            tasks: [
                "- Content support of IT product (web service)",
                "- Setting up and maintaining support processes (updating the knowledge base, FAQ, instructions)",
                "- Participation in training users to work with the system",
                "- Interaction with the development department, statement of technical specifications",
                "- Roadmap proposal for improving the product and services"
            ]
        },
        {
            company: "ERZ", key: "erz", position: "HTML Coder",
            tasks: [
                "- Support and development of existing projects of the company",
                "- Cross-platform, valid adaptive layout",
                "- Optimizing code to improve resource performance",
                "- Finding and fixing bugs",
                "- Content management on the company website",
                "- Participation in the assessment and planning of tasks"
            ]
        },
        {
            company: "Vazaro", key: "vazaro", position: "Content Manager",
            tasks: [
                "- Content management on the company website",
                "- Monitoring and maintaining the relevance of information posted on the site",
                "- Preparation of informational texts for the site (rewriting)",
                "- Search and processing of images for posting on the site (Adobe Photoshop)",
                "- Setting tasks for the development department"
            ]
        },
    ];

    const [active, setActive] = useState(works[0].key);

    return (
        <section className={styles.experience}>

            <SectionTitle text="Experience" />

            <Tabs className={styles.tabs}>
                <div className={styles.tabs__head}>
                    <TabList className={styles.tabs__list}>
                        {works.map((item) => (
                            <Tab className={classNames(
                                active == item.key ?
                                    `${styles.tabs__title} ${styles.tabs__title_active}` :
                                    `${styles.tabs__title}`)} key={item.key}
                                onClick={() => setActive(item.key)}>{item.company}
                            </Tab>
                        ))}
                    </TabList>
                </div>
                <div className={styles.tabs__body}>
                    {works.map((item, index) => (
                        <TabPanel className={styles.tabs__panel} key={index}>
                            <div className={styles.tabs__panelTitle}>{item.position}</div>
                            <ul className={styles.tabs__panelList}>
                                {item.tasks.map((item, index) => (
                                    <li className={styles.tabs__panelListItem} key={index}>{item}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </div >
            </Tabs>

        </section>
    )
}