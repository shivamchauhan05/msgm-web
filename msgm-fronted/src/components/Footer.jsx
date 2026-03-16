import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Phone, Mail, MapPin, Clock, User } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Founder Section */}
        <div className="mb-8 pb-8 border-b border-gray-700">
          <div className="flex items-center justify-center space-x-2 text-yellow-300 mb-2">
            <User size={20} />
            <span className="font-semibold">{t('founder')}</span>
          </div>
          <p className="text-center text-gray-300 text-lg">
            {t('founderName')} {i18n.language === 'hi' ? 'द्वारा स्थापित' : 'Established by'}
          </p>
          <p className="text-center text-gray-400 text-sm mt-1">
            {t('founderQuote')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">{t('schoolName')}</span>
                <p className="text-xs text-yellow-300">{t('schoolLocation')}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {i18n.language === 'hi' 
                ? 'शिक्षा का मंदिर - कुसमरा क्षेत्र में गुणवत्तापूर्ण शिक्षा प्रदान करने वाला अग्रणी संस्थान।'
                : 'Temple of Education - A premier institution providing quality education in Kusmara region.'}
            </p>
            <p className="text-yellow-300 text-sm mt-3 font-semibold italic">
              "{t('schoolMotto')}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-yellow-300">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors inline-flex items-center space-x-1">
                  <span>•</span>
                  <span>{t('admission')}</span>
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors inline-flex items-center space-x-1">
                  <span>•</span>
                  <span>{t('history')}</span>
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors inline-flex items-center space-x-1">
                  <span>•</span>
                  <span>{t('staff')}</span>
                </Link>
              </li>
              <li>
                <Link to="/top-students" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors inline-flex items-center space-x-1">
                  <span>•</span>
                  <span>{t('topStudents')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-300 text-sm transition-colors inline-flex items-center space-x-1">
                  <span>•</span>
                  <span>{t('contact')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-yellow-300">{t('contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-yellow-300 flex-shrink-0" />
                <span>{t('schoolName')}, {t('schoolLocation')}, UP - 205262</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 text-sm">
                <Phone size={16} className="text-yellow-300 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 text-sm">
                <Mail size={16} className="text-yellow-300 flex-shrink-0" />
                <span>msgm.kusmara@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 text-sm">
                <Clock size={16} className="text-yellow-300 flex-shrink-0" />
                <span>{t('monSat')}: {t('timing')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-400 text-sm">
            <div>
              © {currentYear} {t('schoolName')}. {t('copyright')}
            </div>
            <div className="text-yellow-300">
              {t('affiliation')}
            </div>
            <div className="text-xs">
              {i18n.language === 'hi' 
                ? 'अरुण आचार्य द्वारा स्थापित' 
                : 'Established by Arun Acharya'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;