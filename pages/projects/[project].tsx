import { useRouter } from "next/router";
import React from "react";
import Layout from "../../wrappers/Layout";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import projects from '../../util/projectViews.json'

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

const Project = () => {
    const router = useRouter();
    const { project } = router.query
    console.log(router.query);
    return(
        <>
            <NavBar />
           <Layout title={"NS - " + project}>
                <h1 className="">{project}</h1>
                

            </Layout> 

        </>
    )

}
export default Project;