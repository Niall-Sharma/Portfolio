import React from "react";
import Link from "next/link";

const socialLink = ({link, logo, viewBox}) => {
    return(
        <>
            <Link href={link} passHref>
                <a className="text-center mb-4 w-20 mr-5" target={'_blank'} rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white"  viewBox={viewBox}>
                    <path d={logo}/>
                </svg>
                </a>
            </Link>
        </>
    )
}

export default socialLink;