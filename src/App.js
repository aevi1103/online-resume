import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component'
import Employment from './pages/emloyment/employment.component'
import Education from './pages/education/education.component'
import Contact from './pages/contact/contact.component'
import SideBar from './components/sidebar/sidebar.component'
import './App.css'
import { Layout, Content, Container } from './app.styles'

function App() {
  return (
    <Layout className="font-mono">
      <Container>
        <SideBar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="employment" element={<Employment />} />
            <Route path="education" element={<Education />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<span>Not Found</span>} />
          </Routes>
        </Content>
      </Container>
    </Layout>
  )
}

export default App
