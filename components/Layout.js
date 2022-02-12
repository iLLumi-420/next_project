import styles from '../styles/Layout.module.css'
import React from 'react'
import NavBar from './Nav'
import Header from './Header'

function Layout({children}) {
  return (
      <>
        <NavBar />
        <div className={styles.container} >
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
      </>
  )
}

export default Layout