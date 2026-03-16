import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenu(false);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('admission'), path: '/admission' },
    { name: t('history'), path: '/history' },
    { name: t('staff'), path: '/staff' },
    { name: t('topStudents'), path: '/top-students' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            {/* School Logo - Update the src with your actual logo path */}
            <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
              <img 
                src="LOGO.jfif" // 👈 Yahan apna logo ka path lagayein
                alt={t('schoolName')}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Agar logo load na ho to fallback icon dikhaye
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center"><span class="text-white font-bold text-lg">MSGM</span></div>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base">{t('schoolName')}</span>
              <span className="text-xs text-yellow-300">{t('schoolLocation')}</span>
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            {/* Language Toggle Button */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenu(!languageMenu)}
                className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'हिं'}</span>
              </button>

              {/* Language Dropdown */}
              {languageMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      i18n.language === 'en' ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => changeLanguage('hi')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      i18n.language === 'hi' ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700'
                    }`}
                  >
                    🇮🇳 हिन्दी
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-yellow-500 text-blue-900 font-bold'
                    : 'hover:bg-blue-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-yellow-300 border-b-2 border-yellow-300 font-bold'
                  : 'hover:text-yellow-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;