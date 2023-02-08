import styles from '../styles/components/Header.module.scss'
import Logo from '../components/Logo'
import Nav from './Nav'
import Hamburger from './Hamburger'
import PopupMenu from './PopupMenu'
import { useState } from 'react'

export default function Header() {

    const [popupMenuActive, setPopupMenuActive] = useState(false);

    const navData = [
        { title: 'Главная', link: '/', key: 'home', setPopupMenuActive },
        { title: 'Обо мне', link: '/about', key: 'about', setPopupMenuActive },
        { title: 'Опыт работы', link: '/experience', key: 'experience', setPopupMenuActive },
        { title: 'Проекты', link: '/projects', key: 'projects', setPopupMenuActive },
        { title: 'Контакты', link: '/contacts', key: 'contacts', setPopupMenuActive },
    ]

    return (
        <header className={styles.header}>
            <Logo />
            <Nav navData={navData} />
            <Hamburger active={popupMenuActive} setActive={setPopupMenuActive} />
            <PopupMenu active={popupMenuActive} setActive={setPopupMenuActive} navData={navData} />
        </header>
    )
}