import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import History from './pages/History';
import Staff from './pages/Staff';
import TopStudents from './pages/TopStudents';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/history" element={<History />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/top-students" element={<TopStudents />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;