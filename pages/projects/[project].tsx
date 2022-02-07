import { useRouter } from "next/router";
import React from "react";
import Layout from "../../wrappers/Layout";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import projects from '../../util/projectViews.json'

//Wrapper page for all project pages
const Project = () => {

    //Find router and item from Project Views that is associated with this page
    const router = useRouter();
    var { project } = router.query;
    if(!project) return <p></p>;
    var item = projects[project.toString()];

    //Find item associated with this page
    console.log(item);
    return(
        <>
            <NavBar />
           <Layout title={"NS - " + item.title}>
               <div className="container mx-auto mt-20">
                    <h1 className="">F</h1>
                </div>
            </Layout> 

        </>
    )

}
export default Project;