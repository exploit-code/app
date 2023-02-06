import About from '@/components/About'
import Head from 'next/head'

export default function About_page() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <About />
        </>
    )
}