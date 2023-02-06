import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/components/Layout.module.scss'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <style jsx global>{`
                html {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </Layout>
    )
}
