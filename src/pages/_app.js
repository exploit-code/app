import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'
import '../components/Layout/Layout.module.scss'
import { Inter } from '@next/font/google';

import AppWrapper from '../context/AppContext';
import AppContext from '../context/AppContext';


const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
    return (

        <AppWrapper>
            <Layout>
                <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
                <Component {...pageProps} />
            </Layout>
        </AppWrapper>
    )
}
