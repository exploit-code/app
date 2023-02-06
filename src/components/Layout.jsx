import Header from './Header'
import Footer from './Footer'
import layout from '../styles/components/Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={layout.layout}>
            <Header />
            <main className={layout.layout__main}>{children}</main>
            <Footer />
        </div>
    )
}