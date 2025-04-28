import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ErrorPage from './pages/404.jsx';
import HomePage from './pages/home.jsx';
import About from './pages/About.jsx';
import HouseInfo from './pages/HouseInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/aPropos" element={<About />} />
      <Route path="/ficheLogement" element={<HouseInfo />} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
