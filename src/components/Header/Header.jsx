import styles from './Header.module.scss'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Hamburger from '../Hamburger/Hamburger'
import PopupMenu from '../PopUpMenu/PopupMenu'
import { useState } from 'react'

export default function Header() {

    const [popupMenuActive, setPopupMenuActive] = useState(false);

    const navData = [
        { title: 'Главная', link: '/', key: 'home', setPopupMenuActive },
        { title: 'Обо мне', link: '/about', key: 'about', setPopupMenuActive },
        { title: 'Навыки', link: '/skills', key: 'skills', setPopupMenuActive },
        { title: 'Проекты', link: '/projects', key: 'projects', setPopupMenuActive },
        { title: 'Опыт работы', link: '/experience', key: 'experience', setPopupMenuActive },
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