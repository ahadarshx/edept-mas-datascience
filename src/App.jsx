import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Program } from './pages/Program'
import { Cost } from './pages/Cost'
import { Admissions } from './pages/Admissions'
import { WhyIllinoisTech } from './pages/WhyIllinoisTech'
import { About } from './pages/About'
import { Faq } from './pages/Faq'
import { Contact } from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/cost" element={<Cost />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/why-illinois-tech" element={<WhyIllinoisTech />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
