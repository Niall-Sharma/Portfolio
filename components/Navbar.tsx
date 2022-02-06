import React, { ReactNode } from 'react'
import Link from 'next/link'
import NavButton from './navButton'
const NavBar = () => {
    return(
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white drop-shadow-xl">
            <div className="px-6 mx-auto flex flex-wrap items-center justify-between">
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <NavButton navLink='/'>
                            Home
                        </NavButton>
                        <NavButton navLink='../projectsPage'>
                            Projects
                        </NavButton>
                        <NavButton navLink='/'>
                            Contact Me
                        </NavButton>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar;