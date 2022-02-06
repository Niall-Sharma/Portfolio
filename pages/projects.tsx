import Layout from '../wrappers/Layout'
import NavBar from '../components/Navbar'
import ProjectCard from '../components/previews/projectCard'
const ProjectsPage = () => {
    return(
        <>
            <NavBar />
            <Layout title='Projects'>
                <div className='container mx-auto mt-14 flex-grow'>
                    <ProjectCard 
                    image = "https://image.api.playstation.com/vulcan/img/cfn/11307XlqDFlHmHWGjBPndSappCDTnE9OmnP2P-dSzcvLX9i0pvH_okJOl6dP1AnZefxthD-2k3RrsdzYU_BqUy9K5_sv-Tnx.png"
                    page = "/"
                    title="Persona 5"
                    >
                        Description
                    </ProjectCard>
                </div>
            </Layout>
        </>
    );
}
export default ProjectsPage;