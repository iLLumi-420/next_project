
import HeaderStyle from '../styles/Header.module.css'
import React from 'react'

function Header() {
  return (
    <div>
        <h1 className={HeaderStyle.title}>
        <span>Climate</span> News
        </h1>
        <p className={HeaderStyle.description}>Be updated on the latest climate news </p>
    </div>
  )
}

export default Header