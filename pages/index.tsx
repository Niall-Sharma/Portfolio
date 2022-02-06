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
        <p>Amet labore nostrud excepteur ullamco. Fugiat consequat consequat do ex labore ullamco veniam culpa sunt irure laboris voluptate. Do aute voluptate enim veniam in anim et nisi sit irure velit ea enim nulla. Sint culpa nulla duis pariatur duis magna sit non eu. Sint cillum sunt dolore voluptate occaecat.

Velit amet dolor fugiat aliquip ipsum. Excepteur duis exercitation nulla amet deserunt. Cupidatat Lorem eu deserunt enim voluptate nostrud est consequat adipisicing consectetur anim magna dolore duis.

Do anim occaecat cupidatat consequat reprehenderit voluptate duis ex adipisicing. Id ipsum elit cupidatat labore adipisicing laborum esse proident esse occaecat reprehenderit. Cupidatat reprehenderit occaecat in veniam culpa amet pariatur incididunt enim est. Exercitation aute ea occaecat id anim commodo eu.

Non excepteur cillum nostrud adipisicing non ut excepteur amet fugiat. Lorem anim officia nostrud in exercitation elit laboris. Reprehenderit culpa eu do cupidatat veniam elit. Officia consectetur nostrud adipisicing quis amet fugiat laboris cillum magna commodo. Anim ea do id non dolore occaecat aliquip.</p>
      </div>
    </Layout>
  </>
)

export default IndexPage
