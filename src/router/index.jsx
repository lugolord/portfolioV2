import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout'
import Home from '../views/Home'
import Stack from '../views/Stack'
import Projects from '../views/Projects'

export default function Router () {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
