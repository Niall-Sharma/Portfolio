import React, { ReactNode } from 'react'
import Link from 'next/link'
import NavButton from './navButton'
const NavBar = () => {
    return(
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800">
        <div className="px-6 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <NavButton navLink='/'>
                    Home
                </NavButton>
                <NavButton navLink='projects'>
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