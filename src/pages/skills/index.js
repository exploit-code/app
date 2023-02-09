import Head from 'next/head'
import Contact from '@/components/Skills'

export default function Skills_page() {
    return (
        <>
            <Head>
                <title>Contacts</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Contact />
        </>
    )
}