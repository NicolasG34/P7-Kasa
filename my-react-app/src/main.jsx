import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import ErrorPage from './pages/404.jsx';
import HomePage from './pages/home.jsx';
import About from './pages/About.jsx';
import HouseInfo from './pages/HouseInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:rentId" element={<HouseInfo />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
