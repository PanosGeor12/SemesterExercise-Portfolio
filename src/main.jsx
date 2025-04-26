import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,  Route } from 'react-router'
import './index.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import Post from './components/Blog/Post/Post.jsx'
import Projects from './components/Projects/Projects.jsx'
import NoMatch from './components/NoMatch.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />} exact={true}/>
        <Route path='/blog/post/:slug' element={<Post/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<NoMatch/>}/>
        <Route path='not-found' element={<NoMatch/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  // </StrictMode>,
)
