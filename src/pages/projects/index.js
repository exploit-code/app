import Head from 'next/head'
import Projects from '@/components/Projects'

export default function Work_page() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Projects />
    </>
  )
}
