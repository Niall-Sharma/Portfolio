import React from "react";
import Link from "next/link";

const NavButton = ({navLink, children}) => {
    return(
        <>
            <li className="nav-item">
                <Link href={navLink} passHref>
                    <a className="px-10 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
                        {children}
                    </a>
                </Link>
            </li>
        </>
    )
}
export default NavButton;