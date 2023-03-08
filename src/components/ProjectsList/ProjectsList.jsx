import styles from "./ProjectsList.module.scss";
import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";

import Link from "next/link";
import { Children } from "react";

export default function Projects() {
  const projects = [
    {
      key: 1,
      link: "https://bio-sigma.vercel.app",
      title: 'Резюме',
      technologies: ['React', 'Scss']
    },
    {
      key: 2,
      link: "https://www.drweb.ru/landing/blackfriday2022",
      title: 'Черная пятница Dr.Web',
      technologies: ['Html', 'Scss', 'Js']
    },
    {
      key: 5,
      link: "https://www.drweb.ru/landing/promo01062022",
      title: 'Dr.Web Security Space',
      technologies: ['Html', 'Scss', 'Js']
    },
    {
      key: 7,
      link: "https://products.drweb.ru/biz/v4",
      title: 'Конструктор лицензий Dr.Web',
      technologies: ['Html', 'Scss', 'Js', 'Alpine js']
    },
    {
      key: 4,
      link: "https://www.drweb.ru/landing/promokp20",
      title: 'Dr.Web Мобильный бессрочный',
      technologies: ['Html', 'Scss', 'Js']
    },
    {
      key: 3,
      alt: "project",
      link: "https://www.freeantivirusdownloads.com",
      title: 'Free anti-virus Dr.Web',
      technologies: ['Html', 'Scss', 'Js', 'Alpine js']
    },
    {
      key: 6,
      alt: "project",
      link: "https://company.drweb.ru/press/presskit",
      title: 'Пресс-кит Dr.Web',
      technologies: ['Html', 'Scss', 'Js', 'Alpine js']
    },
    {
      key: 8,
      alt: "project",
      link: "https://estore.drweb.ru/promomobile",
      title: 'Dr.Web Security Space для Android',
      technologies: ['Html', 'Scss']
    },
  ];


  return (
    <section className={styles.projects}>
      <SectionTitle text="Проекты" />
      <div className={styles.projects__list}>
        {projects.map((projectItem) => (
          <Card data={projectItem} key={projectItem.key} />
        ))}
      </div>
    </section>
  );
}
