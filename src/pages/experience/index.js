import Head from 'next/head'
import Experience from '@/components/Experience/Experience'

export default function Experience_page() {
    return (
        <>
            <Head>
                <title>Experience</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Experience />
        </>
    )
}