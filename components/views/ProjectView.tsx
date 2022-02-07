import React from "react";
import Layout from "../../wrappers/Layout";
import NavBar from "../Navbar";

interface Props {
    image : string, 
    navTitle :string, 
    gameTitle :string,
    desc:any,
    sourceLink:string
  }

const Project: React.FC<Props> = ({image, navTitle, gameTitle, desc, sourceLink}) =>{
    return(
        <>
            <NavBar />
            <Layout title={navTitle}>
                <div className="container">
                    <h1 className="text-7xl uppercase">{gameTitle}</h1>
                </div>
            </Layout>
        </>
    )
}
export default Project;