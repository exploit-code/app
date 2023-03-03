import styles from "./Experience.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import classNames from "classnames";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";

export default function Experience() {
  const works = [
    {
      company: "Dr.Web",
      link: "https://www.drweb.ru",
      key: "drweb",
      position: "Старший веб-мастер",
      tasks: [
        "- Поддержка текущего сайта компании",
        "- Исправление ошибок",
        "- Создание новых сервисов",
        "- Оптимизация производительности сайта",
        "- Верстка лендингов",
      ],
    },
    {
      company: "Outside Digital",
      link: "https://outside.digital",
      key: "od",
      position: "Старший контент-менеджер",
      tasks: [
        "- Контент-поддержка ИТ продукта (веб-сервис)",
        "- Настройка и ведение процессов поддержки (актуализация базы знаний, FAQ, инструкции)",
        "- Участие в обучении пользователей работе с системой",
        "- Взаимодействие с отделом разработки, постановка ТЗ",
        "- Предложение roadmap по улучшению продукта и сервисов",
      ],
    },
    {
      company: "ERZ",
      link: "https://erzrf.ru/",
      key: "erz",
      position: "HTML-верстальщик",
      tasks: [
        "- Поддержка и развитие существующих проектов компании",
        "- Кроссплатформенная, валидная адаптивная верстка",
        "- Поиск и исправление багов",
        "- Управление контентом на сайте компании",
        "- Участие в оценке и планировании задач",
      ],
    },
    {
      company: "Vazaro",
      link: "https://www.vazaro.ru/",
      key: "vazaro",
      position: "Контент-менеджер",
      tasks: [
        "- Размещение контента на сайте компании",
        "- Контроль и поддержка актуальности информации, размещенной на сайте",
        "- Подготовка информационных текстов для сайта (рерайтинг)",
        "- Поиск и обработка изображений для размещения на сайте (Adobe Photoshop)",
        "- Постановка задач отделу разработки для исправления технических ошибок сайта",
      ],
    },
  ];

  const [active, setActive] = useState(works[0].key);

  return (
    <section className={styles.experience}>
      <SectionTitle text="Опыт работы" />

      <Tabs className={styles.tabs}>
        <div className={styles.tabs__head}>
          <TabList className={styles.tabs__list}>
            {works.map((item) => (
              <Tab
                className={classNames(active == item.key ? `${styles.tabs__title} ${styles.tabs__title_active}` : `${styles.tabs__title}`)}
                key={item.key}
                onClick={() => setActive(item.key)}
              >
                {item.company}
              </Tab>
            ))}
          </TabList>
        </div>
        <div className={styles.tabs__body}>
          {works.map((item, index) => (
            <TabPanel className={styles.tabs__panel} key={index}>
              <div className={styles.tabs__panelTitle}>
                <span>{item.position}</span>
                <Link className={styles.tabs__panelTitle_link} href={item.link} target="_blank">
                  @{item.company}
                </Link>
              </div>
              <ul className={styles.tabs__panelList}>
                {item.tasks.map((item, index) => (
                  <li className={styles.tabs__panelListItem} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
