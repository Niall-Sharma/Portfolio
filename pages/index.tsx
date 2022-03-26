import Link from 'next/link'
import Layout from '../wrappers/Layout'
import NavBar from '../components/Navbar'
import LandingGraphic from '../components/LandingPageGraphic'
const IndexPage = () => (
  <>
    <NavBar />
    <LandingGraphic />
    <Layout title='Home'>
      <div className='container mx-auto mt-14'>
      
      </div>
    </Layout>
  </>
)

export default IndexPage
