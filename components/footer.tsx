import Link from "next/link";
import React from "react";
import SocialLinks from "../util/socialLinksList.json"
import SocialLink from "./socialLink";

var date = new Date();
const Footer = () =>{
    return(
        <>
            <footer className=" bg-black mt-auto py-10 text-white bottom-0" >
                <div className="container mx-auto grid place-items-center">
                    <div className="flex">
                        {SocialLinks.map(SLink => {
                            return(
                                <SocialLink link={SLink.link} logo={SLink.logo} viewBox={SLink.viewBox}/>
                            )
                        })}
                        
                    </div>
                    <hr className=" w-3/4 2xl:w-full mx-auto" />

                    {/* Copyright Notice */}
                    <h1 className="mt-5 md:text-2xl">© {date.getFullYear()} Niall Sharma All Rights Reserved</h1>
                </div>
            </footer>
        </>
    )
}
export default Footer;