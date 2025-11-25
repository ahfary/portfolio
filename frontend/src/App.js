import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
        <Toaster 
          position="top-right"
          theme="dark"
          richColors
        />
      </div>
    </BrowserRouter>
  );
}

export default App;