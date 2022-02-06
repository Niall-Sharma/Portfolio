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
            <div className="max-w-sm rounded overflow-hidden shadow-2xl group relative">
                    <Link href={page} passHref>
                        <a>
                            <div className="mx-auto text-center text-white overlay absolute opacity-0 z-50 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-md">{children}</p>
                            </div>
                            <img src={image} className="group-hover:brightness-50 duration-500 w-full" title="View Full Page" />
                        </a>
                    </Link>
                <h1 className="mx-auto text-center text-4xl bg-black text-white">{title}</h1>
            </div>
        </>
    )
}
export default ProjectCard;