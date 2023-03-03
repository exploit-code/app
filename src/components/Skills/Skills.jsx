import styles from "./Skills.module.scss";
import SkillItem from "../SkillItem/SkillItem";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Skills() {
  const technologys = [
    { name: "html", key: "html", mod: "html" },
    { name: "css", key: "css", mod: "css" },
    { name: "scss", key: "scss", mod: "scss" },
    { name: "js", key: "js", mod: "js" },
    { name: "alpine js", key: "alpine js", mod: "alpinejs" },
    { name: "react", key: "react", mod: "react" },
    { name: "next js", key: "next js", mod: "nextjs" },
    { name: "photoshop", key: "photoshop", mod: "ps" },
    { name: "figma", key: "figma", mod: "figma" },
  ];

  return (
    <section className={styles.skills}>
      <SectionTitle text="Навыки" />

      <div className={styles.skills__content}>
        <div className={styles.skills__box}>
          <p className={styles.skills__description}>
            Мне нравится брать на себя ответственность за создание эстетичных пользовательских интерфейсов. Для их
            создания я использую современные технологии, ведь мир не стоит на месте и всегда нужно сохранять
            актуальность своих знаний.
          </p>
        </div>

        <div className={styles.skills__box}>
          {technologys.map((technology) => (
            <SkillItem technology={technology.name} key={technology.key} mod={technology.mod} />
          ))}
        </div>
      </div>
    </section>
  );
}
