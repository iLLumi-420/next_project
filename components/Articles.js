import React from 'react'
import styles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

function Articles({ articles }) {
  return (
    <div className={styles.grid}>
    {articles.map((article)=>( <ArticleItem article={article} /> )) }
    </div>
  )
}

export default Articles