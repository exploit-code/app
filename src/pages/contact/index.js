import Head from 'next/head'
import Contact from '@/components/Contact'

export default function Contact_page() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Contact />
        </>
    )
}