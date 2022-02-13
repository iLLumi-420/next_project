import Head from 'next/head'
import Articles from '../components/Articles'
import Image from 'next/image'


export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Climate</title>
      </Head>
      <Articles articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
