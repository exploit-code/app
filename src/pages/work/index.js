import Head from 'next/head'
import Work from '@/components/Work'

export default function Work_page() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Work />
    </>
  )
}
