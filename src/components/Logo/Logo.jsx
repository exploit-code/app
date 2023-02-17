import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../../public/images/logo.png'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <Link className={styles.logo} href="/">
            <Image className={styles.logo__img} src={LogoImg} alt="logo" placeholder="blur" />
        </Link>
    )
}