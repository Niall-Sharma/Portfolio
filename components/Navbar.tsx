import React, { ReactNode } from 'react'
import Link from 'next/link'
import NavButton from './navButton'
const NavBar = () => {
    return(
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-1 py-3  bg-white drop-shadow-xl">
            <div className="mr-auto flex flex-wrap items-center">
                    <ul className="flex flex-col lg:flex-row list-none">
                        <NavButton navLink='/'>
                            Home
                        </NavButton>
                        <NavButton navLink='../projectsPage'>
                            Projects
                        </NavButton>
                        <NavButton navLink='../contactPage'>
                            Contact Me
                        </NavButton>
                    </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar;