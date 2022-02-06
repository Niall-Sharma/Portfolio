import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    image : string, 
    page :string, 
    title :any,
    children:any
  }

const ProjectCard: React.FC<Props> = ({image, page, title, children}) =>{
    return(
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="hover:opacity-80 duration-150">
                    <Link href={page} passHref>
                        <a><img src={image} className="w-full" title="View Full Page" />
                        </a>
                    </Link>
                </div>
                <h1 className="mx-auto text-center text-4xl bg-gray-800 text-white">{title}</h1>
                <div className="mx-auto text-center pt-5 pb-5 bg-gray-800 text-white">
                    {children}
                </div>
            </div>
        </>
    )
}
export default ProjectCard;