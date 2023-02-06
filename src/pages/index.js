import Head from 'next/head'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home_page() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <About />
            <Experience />
            <Work />
            <Contact />
        </>
    )
}
