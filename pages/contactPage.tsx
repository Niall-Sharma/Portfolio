import React from "react";
import Layout from "../wrappers/Layout";
import NavBar from "../components/Navbar";


const contactPage = () => {
    return(
        <>
            <NavBar />
            <Layout title="Contact">
                <div className="mx-auto container w-5/6">
                    <h1 className="text-7xl mt-5">Contact</h1>
                    <p className="mt-5 mx-2 text-xl">Email: Niall.k.Sharma@gmail.com</p>
                </div>
            </Layout>
        </>
    )
}

export default contactPage
