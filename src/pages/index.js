import Head from 'next/head'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'
// import NavModal from '@/components/NavModal'

export default function Home_page() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <NavModal /> */}

            <About />
            <Experience />
            <Projects />
            <Contacts />
        </>
    )
}
