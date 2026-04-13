import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Home, BookOpen, History, Users, Trophy, Camera, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenu(false);
  };

  const navLinks = [
    { name: t('home'), path: '/', icon: <Home size={18} /> },
    { name: t('admission'), path: '/admission', icon: <BookOpen size={18} /> },
    { name: t('history'), path: '/history', icon: <History size={18} /> },
    { name: t('staff'), path: '/staff', icon: <Users size={18} /> },
    { name: t('topStudents'), path: '/top-students', icon: <Trophy size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <Camera size={18} /> },
    { name: t('contact'), path: '/contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-200'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition duration-500" />
                <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="LOGO.jfif"
                    alt={t('schoolName')}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center"><span class="text-white font-bold text-lg">MSGM</span></div>';
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-sm md:text-base lg:text-lg tracking-tight group-hover:text-blue-700 transition">
                  {t('schoolName')}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">{t('schoolLocation')}</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 lg:px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                  }`}
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">{link.icon}</span>
                  <span>{link.name}</span>
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenu(!languageMenu)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Globe size={18} />
                  <span className="text-sm font-semibold">{i18n.language === 'en' ? 'EN' : 'हिं'}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${languageMenu ? 'rotate-180' : ''}`} />
                </button>

                {languageMenu && (
                  <div className="absolute right-0 mt-3 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-dropdown">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-blue-50 transition ${
                        i18n.language === 'en' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span>🇬🇧</span> English
                      {i18n.language === 'en' && <span className="ml-auto text-blue-600">✓</span>}
                    </button>
                    <button
                      onClick={() => changeLanguage('hi')}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-blue-50 transition ${
                        i18n.language === 'hi' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span>🇮🇳</span> हिन्दी
                      {i18n.language === 'hi' && <span className="ml-auto text-blue-600">✓</span>}
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation (Slide from right) */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col px-4 pb-8 space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 ${
                    location.pathname === link.path ? 'bg-blue-50 text-blue-700 font-semibold' : ''
                  }`}
                  style={{
                    animation: isOpen ? `fadeSlide 0.3s ease-out ${idx * 0.05}s forwards` : 'none',
                    opacity: 0,
                    transform: 'translateX(20px)'
                  }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Overlay for mobile menu */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-40 md:hidden animate-fadeIn"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Animations */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes dropdown {
          0% { opacity: 0; transform: translateY(-8px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-dropdown { animation: dropdown 0.2s ease-out forwards; transform-origin: top right; }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Navbar;