import Head from 'next/head'
import Articles from '../components/Articles'
import Image from 'next/image'


export default function Home({articles}) {
  console.log(articles, 'gvhbj')
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
