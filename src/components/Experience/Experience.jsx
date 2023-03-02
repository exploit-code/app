import styles from './Experience.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Experience() {

    const works = [
        {
            company: "Dr.Web", key: "drweb", position: "Senior Web-master",
            tasks: [
                'Поддержка текущего сайта компании',
                'Исправление ошибок',
                'Создание новых сервисов',
                'Оптимизация производительности сайта',
                'Создание лендингов',
            ]
        },
        {
            company: "Outside Digital", key: "od", position: "Senior Content Manager",
            tasks: [
                'Контент-поддержка ИТ продукта (веб-сервис)',
                'Настройка и ведение процессов поддержки (актуализация базы знаний, FAQ, инструкции)',
                'Участие в обучении пользователей работе с системой',
                'Коммуникация с клиентом, отчётность по работе',
                'Взаимодействие с отделом разработки, постановка ТЗ',
                'Предложение roadmap по улучшению продукта и сервисов'
            ]
        },


    ];

    return (
        <section className={styles.experience}>

            <Tabs className={styles.tabs}>
                <div className={styles.tabs__head}>
                    <TabList className={styles.tabs__list}>
                        {works.map((item) => (
                            <Tab className={styles.tabs__title} key={item.key}>{item.company}</Tab>
                        ))}
                    </TabList>
                </div>

                <div className={styles.tabs__body}>
                    {works.map((item, index) => (
                        <TabPanel className={styles.tabs__panel} key={index}>
                            <div className='tabPanel__head'>{item.position}</div>
                            <ul className='tabPanel__body'>
                                {item.tasks.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </div >
            </Tabs>

        </section>
    )
}