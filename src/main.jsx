import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { TabBar } from './components/TabBar'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="grain flex min-h-screen flex-col pb-tabbar sm:pb-0">
        <a
          href="#work"
          className="label sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing/:slug" element={<Post />} />
            <Route path="*" element={<Post />} />
          </Routes>
        </main>
        <Footer />
        <TabBar />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
