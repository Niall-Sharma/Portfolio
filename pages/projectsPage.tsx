import Layout from '../wrappers/Layout'
import NavBar from '../components/Navbar'
import ProjectCard from '../components/previews/projectCard'
import Projects from '../util/projectPreviews.json'
const ProjectsPage = () => {
    return(
        <>
            <NavBar />
            <Layout title='NS - Projects'>
                <div className='container mx-auto mt-14 flex-grow grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    {Projects.map(project => {
                        return(

                                <ProjectCard
                                image={project.cover}
                                page={project.slug}
                                desc={project.excerpt}
                                title={project.title}
                                key={project.id}
                                >
                                </ProjectCard>
                        )
                    })}
                </div>
            </Layout>
        </>
    );
}
export default ProjectsPage;