import React from "react";
import Link from "next/link";
import Image from "next/image";

//Cards found in Projects Page

//All props needed for card
interface Props {
    image : string, 
    page :string, 
    title :any,
    desc:any
  }

const ProjectCard: React.FC<Props> = ({image, page, title, desc}) =>{
    return(
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-2xl group relative">

                {/* Link to project page */}
                    <Link href={page} passHref>
                        <a>

                        {/* Centered text on image */}
                        <div className="mx-auto text-center text-white absolute opacity-0 z-50 top-1/3 transform -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-xl">{desc}</p>
                        </div>

                        {/* Image */}
                        <img src={image} className="group-hover:brightness-25 duration-500 w-full h-full" title="View Full Page" />
                            
                        {/* Project Title */}
                        <h1 className="text-center text-4xl pt-5 opacity-0 text-white w-full bottom-5 absolute h-1/4 group-hover:opacity-100 transition-opacity duration-500">{title}</h1>
                    </a>
                </Link>
            </div>
        </>
    )
}
export default ProjectCard;