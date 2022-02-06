import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    image : string, 
    page :string, 
    title :any
  }

const ProjectCard: React.FC<Props> = ({image, page, title}) =>{
    return(
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="">
                    <Link href={page} passHref>
                        <a><img src={image} className="w-full" title="View Full Page" />
                        </a>
                    </Link>
                </div>
                <div className="mx-auto text-center pt-5 pb-5 bg-gray-800 text-white">
                    {title}
                </div>
            </div>
        </>
    )
}
export default ProjectCard;