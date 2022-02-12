import React from 'react'
import Link from 'next/link'
import styles from '../styles/Article.module.css'

function ArticleItem({article}) {
  return (
    <Link href='/article/[id]' as={`article/${article.id}`}>
        <a className={styles.card}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default ArticleItem