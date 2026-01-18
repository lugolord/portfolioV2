import TopHeader from './components/TopHeader'
import Background from './components/Background'
import Layout from './components/Layout'
import Stack from './components/Stack'
import ProjectsContainer from './components/ProjectsContainer'
import WorkContainer from './components/WorkContainer'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <Background>
      <Layout>
        <TopHeader />
        <Stack />
        <ProjectsContainer />
        <WorkContainer />
        <About />
        <Footer />
      </Layout>
    </Background>
   
  )
}

export default App
