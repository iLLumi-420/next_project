import React from 'react'
import Link from 'next/link'
import NavStyle from '../styles/Nav.module.css'

function NavBar() {
  return (
    <nav className={NavStyle.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar