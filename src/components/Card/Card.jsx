import styles from "./Card.module.scss";
import Link from "next/link";
import IconPage from '../../../public/images/icon-page.svg';
import IconOpen from '../../../public/images/icon-open.svg';

export default function Card({ data }) {

  return (
    <div className={styles.card}>
      <div className={styles.card__head}>
        <IconPage />
        <Link href={data.link} target="_blank">
          <IconOpen />
        </Link>
      </div>

      <div className={styles.card__body}>
        <p>{data.title}</p>
        <ul className={styles.card__list}>
          {data.technologies.map((item, index) => (
            <li className={styles.card__listItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card__footer}>
        <Link className={styles.card__link} href={data.link} target="_blank">
          Просмотр
        </Link>
      </div>
    </div>
  );
}
