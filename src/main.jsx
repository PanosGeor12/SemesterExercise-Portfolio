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

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />} exact={true}/>
        <Route path='/blog/:slug' element={<Post/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  // </StrictMode>,
)
