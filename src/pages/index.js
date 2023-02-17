import Head from 'next/head'
import About from '@/components/About/About'
import Experience from '@/components/Experience/Experience'
import ProjectsList from '@/components/ProjectsList/ProjectsList'
import Skills from '@/components/Skills/Skills'

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
            <Skills />
            <ProjectsList />
            <Experience />
        </>
    )
}
